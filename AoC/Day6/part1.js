function beatsRecord(distance, time, charge) {
  return charge * (time - charge) > distance;
}

function solve(input) {
  const times = input[0].match(/\d+/g).map((x) => parseInt(x));
  const distances = input[1].match(/\d+/g).map((x) => parseInt(x));

  let product = 1;
  for (let i = 0; i < times.length; i++) {
    const time = times[i];
    const distance = distances[i];

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

    product *= r - l + 1;
  }

  return product;
}

module.exports = solve;
