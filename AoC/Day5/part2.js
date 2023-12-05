function solve(input) {
  const lines = input.split("\n").filter((item) => item);

  const locations = [];
  lines
    .shift()
    .match(/\d+\s\d+/g)
    .map((pair) => pair.trim().split(" "))
    .forEach((pair) => {
      const start = parseInt(pair[0]);
      const range = parseInt(pair[1]);
      console.log(pair, start, range, start + range);
      for (let i = start; i <= start + range; i++) {
        locations.push(getLocation(i));
      }
    });

  function getLocation(seed) {
    let num = seed;
    let skipToNext = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line[line.length - 1] === ":") {
        skipToNext = false;
        continue;
      }

      if (!skipToNext) {
        const digits = line.match(/\d+/g).map((n) => parseInt(n));
        if (digits[1] > num) continue;
        if (digits[1] + digits[2] >= num) {
          const diff = digits[0] - digits[1];
          num = num + diff;
          skipToNext = true;
        }
      }
    }

    return num;
  }

  return Math.min(...locations);
}

module.exports = solve;
