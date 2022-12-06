const fs = require("fs");

const input = fs.readFileSync("./input6.txt", { encoding: "utf8" });
// const input = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`;

let elems = [];
for (let i = 0; i < input.length; i++) {
  const element = input[i];
  if (!elems.includes(element)) {
    elems.push(element);

    // For n1 === 4
    if (elems.length === 14) {
      console.log(i + 1);
      break;
    }
  } else {
    const index = elems.indexOf(element);
    elems.splice(0, index + 1);

    elems.push(element);
  }
}
