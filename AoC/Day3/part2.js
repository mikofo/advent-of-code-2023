function solve(input) {
  const rows = input.split("\n").filter((item) => item);

  function isGearAdjacent(row, column, rowLength) {
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = column - 1; j <= column + 1; j++) {
        if (j === column && i === row) continue;
        if (i < 0 || i >= rows.length) continue;
        if (j < 0 || j >= rowLength) continue;
        if (rows[i].charAt(j) === "*") return `${i},${j}`;
      }
    }

    return null;
  }

  const seenGears = {};

  rows.forEach((row, rIndex) => {
    const digitReg = new RegExp(/\d+/g);
    let sum = 0;
    while ((m = digitReg.exec(row))) {
      const digit = m[0];
      for (let i = 0; i < digit.length; i++) {
        const gearCoords = isGearAdjacent(rIndex, m.index + i, row.length);
        if (gearCoords) {
          if (seenGears[gearCoords])
            seenGears[gearCoords].push(parseInt(digit));
          else seenGears[gearCoords] = [parseInt(digit)];
          break;
        }
      }
    }
  });

  return Object.values(seenGears)
    .filter((val) => val.length === 2)
    .reduce((acc, val) => acc + val.reduce((acc, num) => acc * num, 1), 0);
}

module.exports = solve;
