/**
 * Used to format the API user activity data
 *
 * @class ActivityData
 *
 * @param {json} activitiesData Json File with user activity data
 *
 * @returns {object} with formatted user activity data
 *
 */

export default class ActivityData {
  constructor(activitiesData) {
    this._sessions = activitiesData.data.sessions
  }
  get barChartData() {
    return this._sessions.map((session) => {
      return {
        kilogram: session.kilogram,
        calories: session.calories,
        day: new Date(session.day).getDate(),
      }
    })
  }
}
