const Candidate = require('./Candidate');
const BallotPaper = require('./BallotPaper');
const BallotBoard = require('./BallotBoard');

const candidates = ['Winery Tour', 'Ten Pin Bowling', 'Movie Night', 'Museum Visit'];

const candidate = new Candidate(candidates);
const ballotPaper = new BallotPaper(candidate);
const ballotBoard = new BallotBoard(candidate);

const pool = [];
const votes = [
  [0, 1, 3, 2],
  [1, 0, 3],
  [2, 0, 1, 3],
  [2, 3, 0, 1],
  [3, 0],
  [3, 1],
  [1, 0, 2],
  [2, 1, 0, 3],
];

for(let i = 0; i < 8; i++) {
  const paper = ballotPaper.clone();
  pool.push(paper.vote(votes[i]));
}

console.log(pool.map(p => p.toString()));

pool.forEach(ballot => ballotBoard.allocateBallot(ballot));

console.log(`${ballotBoard.getVoteResult()} is the winner`);
