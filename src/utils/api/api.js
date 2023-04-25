import ActivityData from '../dataModels/userActivity'
import UserData from '../dataModels/userData'
import AverageSessionsData from '../dataModels/userAverageSessions'
import PerformanceData from '../dataModels/userPerformance'

const isDataMocked = process.env.REACT_APP_MOCKED_DATA === 'true'

/**
 * @function getUserActivity Request user activity data from API or mocked data
 * @param {string} id User ID
 * @returns {object} Formatted user activity data
 */
export async function getUserActivity(id) {
  const url = isDataMocked
    ? `${process.env.REACT_APP_BASE_URL}/mocked-data/user/${id}/activity/activity.json`
    : `${process.env.REACT_APP_BASE_URL}/user/${id}/activity`
  try {
    const res = await fetch(url)
    const data = await res.json()
    const formattedData = new ActivityData(data)
    return formattedData
  } catch (error) {
    console.error(error)
  }
}

/**
 * @function getUserData Request user data from API or mocked data
 * @param {string} id User ID
 * @returns {object} Formatted user data
 */
export async function getUserData(id) {
  const url = isDataMocked
    ? `${process.env.REACT_APP_BASE_URL}/mocked-data/user/${id}/user.json`
    : `${process.env.REACT_APP_BASE_URL}/user/${id}`
  try {
    const res = await fetch(url)
    const data = await res.json()
    const formattedData = new UserData(data)
    return formattedData
  } catch (error) {
    console.error(error)
  }
}

/**
 * @function getUserAverageSessions Request user average sessions data from API or mocked data
 * @param {string} id User ID
 * @returns {object} Formatted user average sessions data
 */
export async function getUserAverageSessions(id) {
  const url = isDataMocked
    ? `${process.env.REACT_APP_BASE_URL}/mocked-data/user/${id}/average-sessions/average-sessions.json`
    : `${process.env.REACT_APP_BASE_URL}/user/${id}/average-sessions`
  try {
    const res = await fetch(url)
    const data = await res.json()
    const formattedData = new AverageSessionsData(data)
    return formattedData
  } catch (error) {
    console.error(error)
  }
}

/**
 * @function getUserPerformance Request user performance data from API or mocked data
 * @param {string} id User ID
 * @returns {object} Formatted user performance data
 */
export async function getUserPerformance(id) {
  const url = isDataMocked
    ? `${process.env.REACT_APP_BASE_URL}/mocked-data/user/${id}/performance/performance.json`
    : `${process.env.REACT_APP_BASE_URL}/user/${id}/performance`
  try {
    const res = await fetch(url)
    const data = await res.json()
    const formattedData = new PerformanceData(data)
    return formattedData
  } catch (error) {
    console.error(error)
  }
}
