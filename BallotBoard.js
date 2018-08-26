class BallotBoard {
  constructor (candidate) {
    this.candidate = candidate;
    this.round = 0;

    const count = this.candidate.count;
    this.ballotColumns = new Array(count);
    for(let i = 0; i < count; i++) {
      this.ballotColumns[i] = [];
    }
  }

  allocateBallot(ballot) {
    const col = ballot.getTopPrefId();
    (col >= 0) && this.ballotColumns[col].push(ballot);
    // Drop if not found
  }

  toString() {
    const columnStringBuilder = this.ballotColumns.map((col, i) => {
      const candidateTitle = this.candidate.getCandidateById(i);
      return `candidate ${candidateTitle} got ${col.length} ballots, not eliminated: ${this.candidate.isNotEliminatedId(i)}`;
    });

    return columnStringBuilder.join('\n');
  }
}

module.exports = BallotBoard;
