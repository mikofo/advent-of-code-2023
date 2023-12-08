function getPower(games) {
  const counts = [0, 0, 0];
  let blocks = games.match(/\d+\s\w/g);
  for (let i = 0; i < blocks.length; i++) {
    const vals = blocks[i].split(" ");
    const num = parseInt(vals[0]);
    const color = vals[1] === "r" ? 0 : vals[1] === "g" ? 1 : 2;
    if (counts[color] === 0) counts[color] = num;
    else if (counts[color] < num) counts[color] = num;
  }

  return counts.reduce((acc, val) => acc * val, 1);
}

function solve(input) {
  return input.reduce((acc, line) => acc + getPower(line), 0);
}

module.exports = solve;
