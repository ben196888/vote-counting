module.exports = {
  voteCounting,
};

function voteCounting(ballotBoard) {
  let candidateId;
  do {
    console.log(ballotBoard.toString());
    candidateId = nextRound(ballotBoard);
  } while (candidateId === -1);
  return candidateId;
}

// TODO: refactor to be generator function
function nextRound(ballotBoard) {
  const candidate = ballotBoard.candidate;
  const ballotColumns = ballotBoard.ballotColumns;
  const notEliminatedCols = ballotColumns.filter((col, i) => candidate.isNotEliminatedId(i));
  const nonExhaustedBallots = notEliminatedCols.reduce((sum, col) => (sum + col.length), 0);
  const maxCandidate = ballotColumns.reduce((res, col, i) => {
    if (candidate.isNotEliminatedId(i) && col.length > res.max) {
      res.max = col.length;
      res.id = i;
    }
    return res;
  }, { max: 0, id: -1 });
  const minCandidate = ballotColumns.reduce((res, col, i) => {
    if (candidate.isNotEliminatedId(i) && col.length < res.min) {
      res.min = col.length;
      res.id = i;
    }
    return res;
  }, { min: nonExhaustedBallots, id: -1 });
  const winThreshold = Math.ceil(nonExhaustedBallots / 2);

  // return candidate id
  if (maxCandidate.max >= winThreshold) {
    return maxCandidate.id;
  }

  // Eliminate minimum column
  candidate.eliminateCandidateById(minCandidate.id);

  // Relocate the ballot in eliminated column
  const ballotsShouldBeRelocated = ballotColumns[minCandidate.id];
  const ballotsRelocatedFailed = [];
  for (const ballot of ballotsShouldBeRelocated) {
    console.log(`Relocate ballot ${ballot.toString()}`);
    const relocateSuc = ballotBoard.allocateBallot(ballot);
    relocateSuc || ballotsRelocatedFailed.push(relocateSuc);
  }
  ballotColumns[minCandidate.id] = ballotsRelocatedFailed;

  // return means not found result yet
  return -1;
}
