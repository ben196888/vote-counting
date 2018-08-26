const voteCounting = require('./voteCounting').voteCounting;

class BallotBoard {
  constructor (candidate) {
    this.candidate = candidate;

    const count = this.candidate.count;
    this.ballotColumns = new Array(count);
    for(let i = 0; i < count; i++) {
      this.ballotColumns[i] = [];
    }
  }

  allocateBallot(ballot) {
    const col = ballot.getTopPrefId();
    return Boolean((col >= 0) && this.ballotColumns[col].push(ballot));
  }

  getVoteResult() {
    const candidateId = voteCounting(this);
    return this.candidate.getCandidateById(candidateId);
  }

  toString() {
    const columnStringBuilder = this.ballotColumns.map((col, i) => {
      const candidateTitle = this.candidate.getCandidateById(i);
      const eliminatedWord = this.candidate.isNotEliminatedId(i) ? 'not eliminated' : 'eliminated';
      return `candidate ${candidateTitle} got ${col.length} ballots, ${eliminatedWord}`;
    });

    return columnStringBuilder.join('\n');
  }
}

module.exports = BallotBoard;
