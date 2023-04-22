import ActivityData from '../dataModels/userActivity'
import UserData from '../dataModels/userData'
import AverageSessionsData from '../dataModels/userAverageSessions'
import PerformanceData from '../dataModels/userPerformance'

const isDataMocked = process.env.REACT_APP_MOCKED_DATA === 'true'

/**
 * @function getUserActivity Request user activity data from API or mocked data
 *
 * @returns {object} Formatted user activity data
 */
export async function getUserActivity() {
  const url = isDataMocked
    ? `${process.env.REACT_APP_BASE_URL}/mocked-data/user/12/activity/activity.json`
    : `${process.env.REACT_APP_BASE_URL}/user/18/activity`
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
 *
 * @returns {object} Formatted user data
 */
export async function getUserData() {
  const url = isDataMocked
    ? `${process.env.REACT_APP_BASE_URL}/mocked-data/user/12/user.json`
    : `${process.env.REACT_APP_BASE_URL}/user/18/`
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
 *
 * @returns {object} Formatted user average sessions data
 */
export async function getUserAverageSessions() {
  const url = isDataMocked
    ? `${process.env.REACT_APP_BASE_URL}/mocked-data/user/12/average-sessions/average-sessions.json`
    : `${process.env.REACT_APP_BASE_URL}/user/18/average-sessions`
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
 *
 * @returns {object} Formatted user performance data
 */
export async function getUserPerformance() {
  const url = isDataMocked
    ? `${process.env.REACT_APP_BASE_URL}/mocked-data/user/12/performance/performance.json`
    : `${process.env.REACT_APP_BASE_URL}/user/18/performance`
  try {
    const res = await fetch(url)
    const data = await res.json()
    const formattedData = new PerformanceData(data)
    return formattedData
  } catch (error) {
    console.error(error)
  }
}
