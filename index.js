const { run } = require("./cli");
require("dotenv").config();

const options = {
  day: process.env.AOC_DAY ? parseInt(process.env.AOC_DAY) : undefined,
  input: process.env.AOC_INPUT || undefined,
  json: process.env.AOC_JSON ? JSON.parse(process.env.AOC_JSON) : undefined,
};

run(options.day, options.input, options.json);
