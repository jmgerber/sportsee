/**
 * Used to format the API user performance data
 *
 * @class PerformanceData
 *
 * @param {json} performancesData Json File with user performance data
 *
 * @returns {object} with formatted user performance data
 *
 */

export default class PerformanceData {
  constructor(performancesData) {
    this._kinds = performancesData.data.kind
    this._dataPerKind = performancesData.data.data
  }

  get kindsTable() {
    const translatedKind = {
      1: 'cardio',
      2: 'energie',
      3: 'endurance',
      4: 'force',
      5: 'vitesse',
      6: 'intensité',
    }
    return translatedKind
  }

  get radarChartData() {
    return this._dataPerKind.map((activitiy) => {
      const activityId = activitiy.kind
      const activityName = this.kindsTable[activityId]
      const activitiyNameCap =
        activityName.charAt(0).toUpperCase() + activityName.slice(1)
      return {
        activity: activitiyNameCap,
        value: activitiy.value,
      }
    })
  }
}

// "kind": {
//   "1": "cardio",
//   "2": "energy",
//   "3": "endurance",
//   "4": "strength",
//   "5": "speed",
//   "6": "intensity"
// }
