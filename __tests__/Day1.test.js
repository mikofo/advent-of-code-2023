const solutions = require("../AoC");
const { promisify } = require("util");
const fs = require("fs");

const readFileAsync = promisify(fs.readFile);

describe("Day01, Part01", () => {
  it("day01.part01.txt", async () => {
    const input = await readFileAsync("./inputs/day01.part01.txt", "utf8");
    expect(solutions[1].part1(input)).toBe(142);
  });

  it("day01.txt", async () => {
    const input = await readFileAsync("./inputs/day01.txt", "utf8");
    expect(solutions[1].part1(input)).toBe(55538);
  });
});

describe("Day01, Part02", () => {
  it("day01.part02.txt", async () => {
    const input = await readFileAsync("./inputs/day01.part02.txt", "utf8");
    expect(solutions[1].part2(input)).toBe(281);
  });

  it("day01.txt", async () => {
    const input = await readFileAsync("./inputs/day01.txt", "utf8");
    expect(solutions[1].part2(input)).toBe(54875);
  });
});
