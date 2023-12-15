class Mapping {
  constructor(str) {
    const values = str.split(" ");
    this.destination = parseInt(values[0]);
    this.source = parseInt(values[1]);
    this.length = parseInt(values[2]);
  }

  contains(seed) {
    return seed >= this.source && seed <= this.source + this.length;
  }

  getNumber(seed) {
    return this.contains(seed) ? this.destination + seed - this.source : null;
  }
}

function solve({ groups, seeds }) {
  let min;
  seeds.forEach((seed) => {
    let num = seed;
    groups.forEach((group) => {
      for (const line of group) {
        const mapping = new Mapping(line);
        const nextNum = mapping.getNumber(num);
        if (nextNum) {
          num = nextNum;
          break;
        }
      }
    });
    if (!min || num < min) min = num;
  });

  return min;
}

module.exports = solve;
