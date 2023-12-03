const solutions = require("./AoC");

function run(day, input) {
  if (!day) {
    console.log(
      "Please specify which day's solutions you want to run as an integer"
    );
    return;
  }

  if (!input) {
    console.log("Please specify an input file to run solutions against");
    return;
  }

  const solution = solutions[day];

  if (!solution) {
    console.log("not implemented");
    return;
  }

  const fs = require("fs");

  fs.readFile(input, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
    }

    const partOne = solution.part1(data);
    const partTwo = solution.part2(data);

    console.log(JSON.stringify({ part_one: partOne, part_two: partTwo }));
  });
}

module.exports = { run };
