function parseLine(line) {
  let r = null;
  let l = null;
  let i = 0;
  while (r === null || l === null) {
    if (r === null && !isNaN(line[i])) r = line[i];
    if (l === null && !isNaN(line[line.length - 1 - i]))
      l = line[line.length - 1 - i];
    i++;
  }

  return parseInt(r + l);
}

function solve(input) {
  return input
    .split("\n")
    .filter((item) => item)
    .reduce((acc, line) => acc + parseLine(line), 0);
}

module.exports = solve;
