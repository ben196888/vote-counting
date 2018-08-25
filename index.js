const candidate = require('./Candidates');
const BallotPaper = require('./BallotPaper');

const candidates = ['Winery Tour', 'Ten Pin Bowling', 'Movie Night', 'Museum Visit'];

candidate.setCandidates(candidates);
ballotPaper = new BallotPaper(candidate);

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
