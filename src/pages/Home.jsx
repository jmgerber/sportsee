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

function Home() {
  const [userData, setUserData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function callUserData() {
      try {
        const userDataResponse = await getUserData()
        setUserData(userDataResponse)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    callUserData()
  }, [])

  return (
    <>
      <Header />
      <MainContainer>
        <VerticalNav />
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
`

const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 6%;
`

export default Home
