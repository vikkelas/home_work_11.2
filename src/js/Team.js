/* eslint-disable linebreak-style */
export default class Team {
  constructor(...hero) {
    this.team = [...hero];
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.team.length; i = +1) {
      yield this.team[i];
    }
  }
}
