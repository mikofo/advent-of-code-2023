function getPoints(game) {
  const sets = game
    .split(":")[1]
    .split("|")
    .map((set) => set.match(/\d+/g));

  const matches = sets[1].filter((num) => sets[0].includes(num));
  if (matches.length === 0) return 0;
  return Math.pow(2, matches.length - 1);
}

function solve(input) {
  return input.reduce((acc, line, index) => acc + getPoints(line), 0);
}

module.exports = solve;
