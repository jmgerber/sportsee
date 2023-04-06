const url =
  process.env.REACT_APP_MOCKED_DATA === 'true'
    ? 'http://localhost:3000/mocked-data/user/12/performance/performance.json'
    : 'http://localhost:3000/user/18/performance'

async function fetchUserPerformance() {
  try {
    const response = await fetch(url)
    const userPerformanceData = await response.json()
    const userPerformance = await userPerformanceData.data
    return userPerformance
  } catch (err) {
    console.log(err)
  }
}

export default fetchUserPerformance
