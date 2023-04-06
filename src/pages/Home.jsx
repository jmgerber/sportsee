import { useEffect, useState } from 'react'
import Header from '../components/Header'
import VerticalNav from '../components/VerticalNav'
import styled from 'styled-components'
import ActivityChart from '../components/ActivityChart'
import AverageSessionsChart from '../components/AverageSessionsChart'
import PerformanceChart from '../components/PerformanceChart'
import TodayScoreChart from '../components/TodayScoreChart'
import InfosCard from '../components/InfosCard'

import fetchUserData from '../hooks/userData'
import fetchUserActivities from '../hooks/userActivities'
import fetchUserAverageSessions from '../hooks/userAverageSessions'
import fetchUserPerformance from '../hooks/userPerformance'

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  & main {
    margin: 60px 100px 0;
    & h1 {
      font-size: 48px;
      font-weight: 500;
      margin-bottom: 36px;
      & > p {
        font-size: 18px;
      }
    }
    & .userName {
      color: #ff0101;
    }
  }

  & .container {
    display: flex;
  }

  & .bottomCharts {
    display: flex;
    margin-top: 40px;
    column-gap: 30px;
  }
`

function Home() {
  const [userInfos, setUserInfos] = useState({})
  const [userStats, setUserStats] = useState({})
  const [userKeyData, setUserKeyData] = useState({})
  const [userActivity, setUserActivity] = useState([])
  const [userAverageSessions, setUserAverageSessions] = useState([])
  const [userPerformance, setUserPerformance] = useState({})

  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setDataLoading(true)
    try {
      fetchUserData().then((data) => {
        setUserStats(data)
        setUserInfos(data.userInfos)
        setUserKeyData(data.keyData)
      })
      fetchUserActivities().then((data) => setUserActivity(data.sessions))
      fetchUserAverageSessions().then((data) =>
        setUserAverageSessions(data.sessions)
      )
      fetchUserPerformance().then((data) => setUserPerformance(data))
    } catch (err) {
      console.log(err)
      setError(true)
    } finally {
      setDataLoading(false)
    }
  }, [])

  if (error) {
    return <span>Oups, il y a eu un problème</span>
  }

  return (
    <>
      <Header />
      <MainContainer>
        <VerticalNav />

        {isDataLoading ? (
          <h1>Chargement</h1>
        ) : (
          <main>
            <h1>
              Bonjour <span className="userName">{userInfos.firstName}</span>
            </h1>
            <p>Félicitations ! Vous avec explosé vos objectifs hier 👏</p>
            <div className="container">
              <section className="charts">
                <div className="topChart">
                  <ActivityChart sessions={userActivity} />
                </div>
                <div className="bottomCharts">
                  <AverageSessionsChart averageSessions={userAverageSessions} />
                  <PerformanceChart userPerformance={userPerformance} />
                  <TodayScoreChart stats={userStats} />
                </div>
              </section>
              <InfosCard keyData={userKeyData} />
            </div>
          </main>
        )}
      </MainContainer>
    </>
  )
}

export default Home
