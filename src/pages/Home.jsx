import { useEffect, useState } from 'react'
import Header from '../components/Header'
import VerticalNav from '../components/VerticalNav'
import styled from 'styled-components'
import BarChartComponent from '../components/BarChartComponent'
import RadarChartComponent from '../components/RadarChartComponent'

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  & main {
    margin: 64px 90px 0;
  }
`

function Home() {
  const [userInfos, setUserInfos] = useState({})
  const [userKeyData, setUserKeyData] = useState({})

  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchUser() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:3000/user/12`)
        const userFetchData = await response.json()
        const userData = await userFetchData.data
        console.log(userData)
        setUserInfos(userData.userInfos)
        setUserKeyData(userData.keyData)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchUser()
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
              Bonjour <span>{userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avec explosé vos objectifs hier</p>
            <BarChartComponent />
            <RadarChartComponent />
          </main>
        )}
      </MainContainer>
    </>
  )
}

export default Home
