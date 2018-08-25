class Candidates {
  constructor() {
    this.candidates = [];
  }

  get count() {
    return this.candidates.length;
  }

  getCandidateById(candidateId) {
    return this.candidates[candidateId];
  }

  setCandidates(candidates) {
    this.candidates = candidates;
    return this;
  }
}

module.exports = Candidates;
