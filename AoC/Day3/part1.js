function isSymbol(char) {
  return isNaN(parseInt(char, 10)) && char !== ".";
}

function solve(input) {
  const rows = input.split("\n").filter((item) => item);

  function isSymbolAdjacent(row, column, rowLength) {
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = column - 1; j <= column + 1; j++) {
        if (j === column && i === row) continue;
        if (i < 0 || i >= rows.length) continue;
        if (j < 0 || j >= rowLength) continue;
        if (isSymbol(rows[i].charAt(j))) return true;
      }
    }

    return false;
  }

  return rows.reduce((acc, row, rIndex) => {
    const digitReg = new RegExp(/\d+/g);
    let sum = 0;
    while ((m = digitReg.exec(row))) {
      const digit = m[0];
      for (let i = 0; i < digit.length; i++) {
        const isPartNumber = isSymbolAdjacent(rIndex, m.index + i, row.length);
        if (isPartNumber) {
          sum += parseInt(digit);
          break;
        }
      }
    }

    return acc + sum;
  }, 0);
}

module.exports = solve;
