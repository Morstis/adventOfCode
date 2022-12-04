const fs = require("fs");

const input = fs.readFileSync("./input4.txt", { encoding: "utf8" });

// const input = `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8
// `;
console.log(input);

const s = input
  .split("\n")
  .map((x) => x.split(",").map((y) => y.split("-").map((x) => parseInt(x))));

const res = s
  .map((x) => {
    if (!x || x.length === 1) return;
    const r =
      (x[0][0] >= x[1][0] && x[0][1] <= x[1][1]) ||
      (x[0][0] <= x[1][0] && x[0][1] >= x[1][1])
        ? 1
        : 0;
    return r;
  })
  .filter(Boolean);

const res2 = s
  .map((x) => {
    if (!x || x.length === 1) return;
    console.log(x);
    for (let i = x[0][0]; i <= x[0][1]; i++) {
      if (x[1][0] <= i && i <= x[1][1]) return 1;
    }
    console.log(0);
    return 0;
  })
  .filter(Boolean);
console.log(res2);

console.log(res.reduce((x, y) => x + y));
console.log(res2.reduce((x, y) => x + y));
