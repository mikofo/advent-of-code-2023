const solutions = require("../AoC");
const { promisify } = require("util");
const fs = require("fs");

const readFileAsync = promisify(fs.readFile);

describe("Day04, Part01", () => {
  it("day04.part01.txt", async () => {
    const input = await readFileAsync("./inputs/day04.part01.txt", "utf8");
    expect(solutions[4].part1(input.split("\n").filter((item) => item))).toBe(
      13
    );
  });

  it("day04.txt", async () => {
    const input = await readFileAsync("./inputs/day04.txt", "utf8");
    expect(solutions[4].part1(input.split("\n").filter((item) => item))).toBe(
      21088
    );
  });
});

describe("day04, Part02", () => {
  it("day04.part02.txt", async () => {
    const input = await readFileAsync("./inputs/day04.part02.txt", "utf8");
    expect(solutions[4].part2(input.split("\n").filter((item) => item))).toBe(
      30
    );
  });

  it("day04.txt", async () => {
    const input = await readFileAsync("./inputs/day04.txt", "utf8");
    expect(solutions[4].part2(input.split("\n").filter((item) => item))).toBe(
      6874754
    );
  });
});
