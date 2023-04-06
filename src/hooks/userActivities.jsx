const url =
  process.env.REACT_APP_MOCKED_DATA === 'true'
    ? 'http://localhost:3000/mocked-data/user/12/activity/activity.json'
    : 'http://localhost:3000/user/18/activity'

async function fetchUserActivities() {
  try {
    const response = await fetch(url)
    const ActivitiesData = await response.json()
    const userActivities = await ActivitiesData.data
    return userActivities
  } catch (err) {
    console.log(err)
  }
}

export default fetchUserActivities
