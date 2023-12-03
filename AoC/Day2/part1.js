function isPossible(games, index) {
  const counts = [12, 13, 14]; // 12 red, 13 green, 14 blue
  let blocks = games.match(/\d+\s\w/g);
  for (let i = 0; i < blocks.length; i++) {
    const vals = blocks[i].split(" ");
    const color = vals[1] === "r" ? 0 : vals[1] === "g" ? 1 : 2;
    counts[color] -= parseInt(vals[0]);
    if (counts[color] < 0) return false;
  }
  console.log(index);
  return true;
}

function solve(input) {
  return input
    .split("\n")
    .reduce(
      (acc, line, index) => acc + (isPossible(line, index + 1) ? index + 1 : 0),
      0
    );
}

module.exports = solve;
