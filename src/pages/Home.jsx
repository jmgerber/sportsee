import CaloriesIcon from '../assets/calories-icon.png'
import ProteinIcon from '../assets/protein-icon.png'
import CarbsIcon from '../assets/carbs-icon.png'
import FatIcon from '../assets/fat-icon.png'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import VerticalNav from '../components/VerticalNav'
import styled from 'styled-components'
import ActivityChart from '../components/ActivityChart'
import AverageSessionsChart from '../components/AverageSessionsChart'
import PerformanceChart from '../components/PerformanceChart'
import TodayScoreChart from '../components/TodayScoreChart'
import InfosCard from '../components/InfosCard'
import { getUserData } from '../utils/api/api'
import { useParams } from 'react-router-dom'

function Home() {
  const { userId } = useParams()
  const [userData, setUserData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function callUserData() {
      try {
        const userDataResponse = await getUserData(userId)
        setUserData(userDataResponse)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    callUserData()
  }, [userId])

  return (
    <>
      <Header />
      <MainContainer>
        <VerticalNav />
        {userData ? (
          <main>
            <h1>
              Bonjour{' '}
              <span className="userName">
                {isLoading ? 'Loading...' : userData.firstName}
              </span>
            </h1>
            <p>Félicitations ! Vous avec explosé vos objectifs hier 👏</p>
            <div className="container">
              <section className="charts">
                <div className="topChart">
                  <ActivityChart />
                </div>
                <div className="bottomCharts">
                  <AverageSessionsChart />
                  <PerformanceChart />
                  <TodayScoreChart />
                </div>
              </section>
              <CardSection>
                <InfosCard
                  number={userData.calories}
                  unit="kCal"
                  category="Calories"
                  imgSrc={CaloriesIcon}
                />
                <InfosCard
                  number={userData.proteins}
                  unit="g"
                  category="Protéines"
                  imgSrc={ProteinIcon}
                />
                <InfosCard
                  number={userData.carbs}
                  unit="g"
                  category="Glucides"
                  imgSrc={CarbsIcon}
                />
                <InfosCard
                  number={userData.lipids}
                  unit="g"
                  category="Lipides"
                  imgSrc={FatIcon}
                />
              </CardSection>
            </div>
          </main>
        ) : (
          <div className="api-error-wrapper">
            <p className="api-error-message">
              Oups! Il semblerait qu'il y ait un problème pour joindre le
              serveur.
            </p>
          </div>
        )}
      </MainContainer>
    </>
  )
}

/////*   Style   */////

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  & main {
    margin: 40px 100px 0;
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
    @media screen and (max-width: 1320px) {
      margin: 30px 60px 0;
      & h1 {
        font-size: 42px;
        margin-bottom: 24px;
      }
    }
  }

  & .container {
    display: flex;
    width: 100%;
  }

  & .bottomCharts {
    display: flex;
    margin-top: 40px;
    column-gap: 30px;
  }

  & .api-error-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & .api-error-message {
      font-size: 2rem;
      font-weight: 500;
    }
  }
`

const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 6%;
`

export default Home
