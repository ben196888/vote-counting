class Candidates {
  constructor() {
    this.candidates = [];
  }

  setCandidates(candidates) {
    this.candidates = candidates;
    return this;
  }
}

// Singleton method
module.exports = new Candidates();
