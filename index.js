const solutions = require("./AoC");

const options = {
  day: process.env.AOC_DAY ? parseInt(process.env.AOC_DAY) : undefined,
  input: process.env.AOC_INPUT || undefined,
  json: process.env.AOC_JSON ? JSON.parse(process.env.AOC_JSON) : undefined,
};

Bun.file(options.input)
  .text()
  .then((file) => {
    const solution = solutions[options.day];
    const input = file.split("\n").filter((item) => item);

    if (!solution) {
      console.log("not implemented");
      return;
    }

    console.log(solution(input));
  });
