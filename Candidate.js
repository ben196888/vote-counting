class Candidate {
  constructor(candidates) {
    this.candidates = candidates;
    this.eliminatedIds = [];
  }

  get count() {
    return this.candidates.length;
  }

  getCandidateById(candidateId) {
    return this.candidates[candidateId];
  }

  isNotEliminatedId(candidateId) {
    return !this.eliminatedIds.includes(candidateId);
  }

  eliminateCandidateById(candidateId) {
    this.eliminatedIds.push(candidateId);
  }
}

module.exports = Candidate;
