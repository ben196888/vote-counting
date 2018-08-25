class BallotPaper {
  constructor(candidate) {
    this.candidate = candidate;
    this.preferenceIds = [];
  }

  clone() {
    return new BallotPaper(this.candidate);
  }

  vote(preferences = []) {
    this.preferenceIds = preferences;
    return this;
  }

  getTopPrefId() {
    const idx = this.preferenceIds.findIndex(prefId => this.candidate.isNotEliminatedById(prefId));
    return (idx >= 0) ? this.preferenceIds[idx] : -1;
  }

  toString() {
    const prefCandidate = this.preferenceIds.map(prefId => this.candidate.getCandidateById(prefId));
    return prefCandidate.join(" > ");
  }
}

module.exports = BallotPaper;
