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
    // Find first not elimiated pref
    const notElimiatedPrefIdx = ballot.preferences.findIndex(pref => !this.eliminated.includes(pref));
    // Found
    if (notElimiatedPrefIdx >= 0) {
      // Put ballot in the column
      const col = ballot.preferences[notElimiatedPrefIdx];
      this.ballotColumns[col].push(ballot);
    }
    // Drop if not found
  }
}

module.exports = BallotBoard;
