const solutions = require("../AoC");
const { promisify } = require("util");
const fs = require("fs");

const readFileAsync = promisify(fs.readFile);

describe("Day03, Part01", () => {
  it("day03.part01.txt", async () => {
    const input = await readFileAsync("./inputs/day03.part01.txt", "utf8");
    expect(solutions[3].part1(input)).toBe(4361);
  });

  it("day03.txt", async () => {
    const input = await readFileAsync("./inputs/day03.txt", "utf8");
    expect(solutions[3].part1(input)).toBe(528819);
  });
});

describe("day03, Part02", () => {
  it("day03.part02.txt", async () => {
    const input = await readFileAsync("./inputs/day03.part02.txt", "utf8");
    expect(solutions[3].part2(input)).toBe(467835);
  });

  it("day03.txt", async () => {
    const input = await readFileAsync("./inputs/day03.txt", "utf8");
    expect(solutions[3].part2(input)).toBe(80403602);
  });
});
