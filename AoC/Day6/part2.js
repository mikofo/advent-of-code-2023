function beatsRecord(distance, time, charge) {
  return charge * (time - charge) > distance;
}

function solve(input) {
  const time = parseInt(
    input[0].match(/\d+/g).reduce((acc, x) => {
      acc += x;
      return acc;
    }, "")
  );
  const distance = parseInt(
    input[1].match(/\d+/g).reduce((acc, x) => {
      acc += x;
      return acc;
    }, "")
  );

  let r = null;
  let l = null;
  let charge = 0;
  while (r === null || l === null) {
    if (beatsRecord(distance, time, charge)) {
      l = charge;
    }
    if (beatsRecord(distance, time, time - charge)) {
      r = time - charge;
    }

    charge++;
  }

  return r - l + 1;
}

module.exports = solve;
