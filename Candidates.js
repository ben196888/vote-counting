class Candidates {
  constructor() {
    this.candidates = [];
  }

  get count() {
    return this.candidates.length;
  }

  setCandidates(candidates) {
    this.candidates = candidates;
    return this;
  }
}

// Singleton
module.exports = new Candidates();
