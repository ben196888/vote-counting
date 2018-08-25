class BallotPaper {
  constructor(candidate) {
    this.candidate = candidate;
    this.preferences = [];
  }

  clone() {
    return new BallotPaper(this.candidate);
  }

  vote(preferences = []) {
    this.preferences = preferences;
    return this;
  }

  toString() {
    const prefCandidate = this.preferences.map(pref => this.candidate.candidates[pref]);
    return prefCandidate.join(" > ");
  }
}

module.exports = BallotPaper;
