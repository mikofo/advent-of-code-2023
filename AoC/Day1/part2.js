const words = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};
const reg = new RegExp(`(${Object.keys(words).join("|")})|\\d`, "g");

function parseLine(line) {
  let digits = [];
  while ((m = reg.exec(line))) {
    digits.push(m[0]);
    reg.lastIndex = m.index + 1;
  }
  digits = digits.map((s) => words[s] || s);

  if (digits.length === 0) return 0;
  if (digits.length === 1) return parseInt(digits[0] + digits[0]);
  return parseInt(digits[0] + digits[digits.length - 1]);
}

function solve(input) {
  return input.split("\n").reduce((acc, line) => acc + parseLine(line), 0);
}

module.exports = { solve };
