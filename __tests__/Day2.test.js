const solutions = require("../AoC");
const { promisify } = require("util");
const fs = require("fs");

const readFileAsync = promisify(fs.readFile);

describe("Day02, Part01", () => {
  it("day02.part01.txt", async () => {
    const input = await readFileAsync("./inputs/day02.part01.txt", "utf8");
    expect(solutions[2].part1(input.split("\n").filter((item) => item))).toBe(
      8
    );
  });

  it("day02.txt", async () => {
    const input = await readFileAsync("./inputs/day02.txt", "utf8");
    expect(solutions[2].part1(input.split("\n").filter((item) => item))).toBe(
      2162
    );
  });
});

describe("day02, Part02", () => {
  it("day02.part02.txt", async () => {
    const input = await readFileAsync("./inputs/day02.part02.txt", "utf8");
    expect(solutions[2].part2(input.split("\n").filter((item) => item))).toBe(
      2286
    );
  });

  it("day02.txt", async () => {
    const input = await readFileAsync("./inputs/day02.txt", "utf8");
    expect(solutions[2].part2(input.split("\n").filter((item) => item))).toBe(
      72513
    );
  });
});
