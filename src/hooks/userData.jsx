const url =
  process.env.REACT_APP_MOCKED_DATA === 'true'
    ? 'http://localhost:3000/mocked-data/user/12/user.json'
    : 'http://localhost:3000/user/18'

async function fetchUserData() {
  try {
    const response = await fetch(url)
    const userFetchData = await response.json()
    const userData = await userFetchData.data
    return userData
  } catch (err) {
    console.log(err)
  }
}

export default fetchUserData
