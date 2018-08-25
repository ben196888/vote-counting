class Candidates {
  constructor() {
    this.candidates = [];
    this.eliminatedIds = [];
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

  isNotEliminatedById(candidateId) {
    return !this.eliminatedIds.includes(candidateId);
  }

  eliminateCandidateById(candidateId) {
    this.eliminatedIds.push(candidateId);
  }
}

module.exports = Candidates;
