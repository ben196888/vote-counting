class BallotBoard {
  constructor (candidate) {
    this.candidate = candidate;
    this.round = 0;

    const count = this.candidate.count;
    this.ballotColumns = new Array(count);
    for(let i = 0; i < count; i++) {
      this.ballotColumns[i] = [];
    }

    this.eliminated = [];
  }

  allocateBallot(ballot) {
    const col = ballot.getTopPrefId();
    (col >= 0) && this.ballotColumns[col].push(ballot);
    // Drop if not found
  }
}

module.exports = BallotBoard;
