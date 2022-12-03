let input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;

const s = input
  .split("\n")
  .map((x) => [
    x.substring(0, x.length / 2),
    x.substring(x.length / 2, x.length),
  ]);

console.log(input);

const res = s
  .map((x) => {
    const items = new Set();
    for (let i = 0; i < x[0].length; i++) {
      if (x[1].includes(x[0][i])) items.add(x[0][i]);
    }

    return Array.from(items);
  })
  .flat()
  .map((y) => {
    console.log(y);
    let res = y.charCodeAt(0) - 38;
    if (res > 52) res = res - 58;
    return res;
  })
  .reduce((x, y) => x + y);
console.log(res);
