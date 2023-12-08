function solve(input) {
  const copies = {};
  function checkScratchcards(game, gameIndex) {
    copies[gameIndex] = copies[gameIndex] ? copies[gameIndex] + 1 : 1;
    const sets = game
      .split(":")[1]
      .split("|")
      .map((set) => set.match(/\d+/g));

    const matches = sets[1].filter((num) => sets[0].includes(num));
    matches.forEach((_, index) => {
      const key = gameIndex + index + 1;
      if (copies[key]) copies[key] += copies[gameIndex];
      else copies[key] = copies[gameIndex];
    });
  }

  input.forEach((line, index) => checkScratchcards(line, index + 1));

  return Object.values(copies).reduce((acc, val) => acc + val, 0);
}

module.exports = solve;
