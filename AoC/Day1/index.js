const part1 = require("./part1");
const part2 = require("./part2");

function day1(input) {
  return JSON.stringify({
    part1: part1(input),
    part2: part2(input),
  });
}

module.exports = day1;
