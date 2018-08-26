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
    console.log(`candidate: ${candidateId} / ${this.getCandidateById(candidateId)} has been eliminated.`);
    this.eliminatedIds.push(candidateId);
  }
}

module.exports = Candidate;
