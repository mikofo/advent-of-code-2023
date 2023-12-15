const part1 = require("./part1");
const part2 = require("./part2");

function day5(input) {
  const seeds = input
    .shift()
    .trim()
    .replace("seeds: ", "")
    .split(" ")
    .map((item) => parseInt(item));
  const groups = [];
  input.forEach((line) => {
    if (line) {
      if (line[line.length - 1] === ":") groups.push([]);
      else groups[groups.length - 1].push(line);
    }
  });

  return JSON.stringify({
    part1: part1({ seeds, groups }),
    part2: part2({
      seeds,
      groups,
    }),
  });
}

module.exports = day5;
