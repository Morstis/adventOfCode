import { DAY9 } from "./input9.js";

let input = `R 4
U 4
L 3
D 1
R 4
D 1
L 10
R 2`;
// input = DAY9;

const res = input.split("\n").map((x) => x.split(" "));

const max = [50, 50];
let head = { x: 20, y: 20 };
let tail = { x: 20, y: 20 };
const beenTo = new Set<string>();
// console.log(head, tail);

res.forEach((x) => {
  console.log(x);
  //   console.log(beenTo);
  if (x[0] === "R") {
    for (let i = 0; i < parseInt(x[1]); i++) {
      head.x++;
      moveTail();
      print();
    }
    return;
  }

  if (x[0] === "U") {
    for (let i = 0; i < parseInt(x[1]); i++) {
      head.y++;
      moveTail();
      print();
    }
    return;
  }

  if (x[0] === "L") {
    for (let i = 0; i < parseInt(x[1]); i++) {
      head.x--;
      moveTail();
      print();
    }
    return;
  }

  if (x[0] === "D") {
    for (let i = 0; i < parseInt(x[1]); i++) {
      head.y--;
      moveTail();
      print();
    }
    return;
  }
});
head;
head = { x: 0, y: 0 };
tail = { x: 0, y: 0 };
print();
// Add +1
console.log(beenTo);

function moveTail() {
  beenTo.add([tail.x, tail.y].join());
  if (head.y === tail.y || head.x === tail.x) {
    if (Math.abs(head.x - tail.x) > 1) {
      console.log("move along x");
      tail.x += head.x > tail.x ? +1 : -1;
    }
    if (Math.abs(head.y - tail.y) > 1) {
      tail.y += head.y > tail.y ? +1 : -1;
      console.log("move along y");
    }
    return;
  }

  if (Math.abs(head.x - tail.x) > 1 || Math.abs(head.y - tail.y) > 1) {
    console.log("move diag");
    tail.x += head.x > tail.x ? +1 : -1;
    tail.y += head.y > tail.y ? +1 : -1;
  }
}

function print() {
  let r = "";
  for (let i = 0; i < max[0]; i++) {
    let c = "";
    for (let j = 0; j < max[1]; j++) {
      let f = true;
      if (i === head.y && j === head.x) {
        c += "H";
      } else if (i === tail.y && j === tail.x) {
        c += "T";
      } else if (beenTo.has([j, i].join())) {
        c += ".";
      } else {
        c += ".";
      }
    }
    r += c + "\n";
  }
  console.log(r);
}

export {};
