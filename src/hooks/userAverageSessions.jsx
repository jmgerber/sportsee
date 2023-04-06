const url =
  process.env.REACT_APP_MOCKED_DATA === 'true'
    ? 'http://localhost:3000/mocked-data/user/12/average-sessions/average-sessions.json'
    : 'http://localhost:3000/user/18/average-sessions'

async function fetchUserAverageSessions() {
  try {
    const response = await fetch(url)
    const SessionsData = await response.json()
    const userSessions = await SessionsData.data
    return userSessions
  } catch (err) {
    console.log(err)
  }
}

export default fetchUserAverageSessions
