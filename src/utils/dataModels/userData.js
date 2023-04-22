/**
 * Used to format the API user data
 *
 * @class UserData
 *
 * @param {json} userData Json File with user data
 *
 * @returns {object} with formatted user data
 *
 */

export default class UserData {
  constructor(userData) {
    this._firstName = userData.data.userInfos.firstName
    this._calorieCount = userData.data.keyData.calorieCount
    this._proteinCount = userData.data.keyData.proteinCount
    this._carbohydrateCount = userData.data.keyData.carbohydrateCount
    this._lipidCount = userData.data.keyData.lipidCount
    this._score = userData.data.todayScore || userData.data.score
  }

  get firstName() {
    return this._firstName
  }

  get calories() {
    return this._calorieCount
  }

  get proteins() {
    return this._proteinCount
  }

  get carbs() {
    return this._carbohydrateCount
  }

  get lipids() {
    return this._lipidCount
  }

  get scoreDisplay() {
    return this._score * 100
  }

  get radialBarChartData() {
    return { score: this._score * 100 }
  }
}
