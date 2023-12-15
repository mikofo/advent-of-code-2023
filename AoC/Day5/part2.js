class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  contains(v) {
    return v >= this.start && v <= this.end;
  }
}

class Entry {
  constructor(dest, source, len) {
    this.source = new Range(source, source + len - 1);
    this.dest = new Range(dest, dest + len - 1);
  }

  translate(v) {
    if (this.source.contains(v)) {
      return this.dest.start + v - this.source.start;
    }
    return null;
  }

  contains(other) {
    return this.source.start <= other.start && other.end <= this.source.end;
  }

  isRightOf(other) {
    return (
      other.start < this.source.start &&
      this.source.start <= other.end &&
      other.end <= this.source.end
    );
  }

  isLeftOf(other) {
    return (
      this.source.start <= other.start &&
      other.start <= this.source.end &&
      this.source.end < other.end
    );
  }

  isContainedBy(other) {
    return other.start < this.source.start && this.source.end < other.end;
  }
}

function solve({ seeds, groups }) {
  const mappingsByGroup = groups.map((lines) => {
    const entries = lines.map((line) => {
      const [dest, source, len] = line
        .trim()
        .split(" ")
        .map((item) => parseInt(item));
      return new Entry(dest, source, len);
    });
    return entries.sort((a, b) => a.source.start - b.source.start);
  });

  let ranges = seeds.reduce((acc, seed, index) => {
    if (index % 2 === 0) {
      acc.push(new Range(seed, seed + seeds[index + 1] - 1));
    }
    return acc;
  }, []);

  for (const mapping of mappingsByGroup) {
    const nextRanges = [];

    loop: while (ranges.length > 0) {
      const range = ranges.pop();
      for (const entry of mapping) {
        if (entry.contains(range)) {
          nextRanges.push(
            new Range(
              range.start + entry.dest.start - entry.source.start,
              range.end + entry.dest.start - entry.source.start
            )
          );
          continue loop;
        } else if (entry.isRightOf(range)) {
          nextRanges.push(new Range(range.start, entry.source.start - 1));
          nextRanges.push(
            new Range(
              entry.dest.start,
              range.end + entry.dest.start - entry.source.start
            )
          );
          continue loop;
        } else if (entry.isLeftOf(range)) {
          nextRanges.push(
            new Range(
              range.start + entry.dest.start - entry.source.start,
              entry.source.end + entry.dest.start - entry.source.start
            )
          );
          ranges.push(new Range(entry.source.end + 1, range.end));
          continue loop;
        } else if (entry.isContainedBy(range)) {
          nextRanges.push(new Range(range.start, entry.source.start - 1));
          nextRanges.push(new Range(entry.dest.start, entry.dest.end));
          ranges.push(new Range(entry.source.end + 1, range.end));
          continue loop;
        }
      }
      nextRanges.push(range);
    }

    ranges = nextRanges;
  }

  return Math.min(...ranges.map((r) => r.start));
}

module.exports = solve;
