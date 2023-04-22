/**
 * Used to format the API user average sessions data
 *
 * @class AverageSessionsData
 *
 * @param {json} averageSessionsData Json File with user average sessions data
 *
 * @returns {object} with formatted average sessions data
 *
 */

export default class AverageSessionsData {
  constructor(averageSessionsData) {
    this._avgSessions = averageSessionsData.data.sessions
  }

  get daysTable() {
    return ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  }

  get lineChartData() {
    return this._avgSessions.map((session) => {
      const dayNumber = session.day
      const dayLetter = this.daysTable[dayNumber - 1]
      return {
        day: dayLetter,
        length: session.sessionLength,
      }
    })
  }
}
