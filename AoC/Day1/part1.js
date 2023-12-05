function parseLine(line) {
  const digits = line.match(/\d/g);
  if (digits.length === 0) return 0;
  if (digits.length === 1) return parseInt(digits[0] + digits[0]);
  return parseInt(digits[0] + digits[digits.length - 1]);
}

function solve(input) {
  return input
    .split("\n")
    .filter((item) => item)
    .reduce((acc, line) => acc + parseLine(line), 0);
}

module.exports = solve;
