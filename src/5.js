const fs = require("fs");

let input = fs.readFileSync("./input5.txt", { encoding: "utf8" });

// input = `
//     [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2`;

const i = input.split("\n\n").map((x) => x.split("\n"));

let stacks = [];

i[0].forEach((x) => {
  const h = Array.from(x.match(/[A-Z]/gi) ?? []);
  for (let i = 0; i < x.length; i++) {
    const e = x[i];
    if (h.includes(e)) {
      const stackInd = (i - 1) / 4;
      const s = stacks[stackInd];
      stacks[stackInd] = [e, ...(s ?? [])];
    }
  }
  console.log(stacks);
});

// move
i[1].forEach((x) => {
  const h = Array.from(x.match(/[0-9]+/gi) ?? []);
  console.log(h);

  if (h.length === 0) return;
  const f = stacks[h[1] - 1];
  console.log(stacks);
  const crates = stacks[h[1] - 1].splice(f.length - h[0], f.length);
  console.log(crates, h);
  stacks[h[2] - 1].push(crates);
  stacks[h[2] - 1] = stacks[h[2] - 1].flat(2);
  //    console.log(stacks);
  //   for (let i = 1; i <= h[0]; i++) {
  //     stacks[h[2] - 1].push(stacks[h[1] - 1].pop());
  //   }
});
console.log(stacks.map((x) => x.pop()).join(""));
