"use strict";
const input = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;
let sys = { data: [{ name: "/", data: [] }] };
let pwd = [];
const r = input.split("\n").map((x) => x.split(" "));
console.log(r);
r.forEach((x) => {
    if (x[0] === "$") {
        if (x[1] === "ls") {
            return;
        }
        if (x[1] === "cd") {
            console.log("change dir");
            if (x[2] !== "..") {
                pwd.push(x[2]);
            }
            if (x[2] == "..") {
                pwd.pop();
            }
            console.log(pwd);
            return;
        }
        return;
    }
    const dir = getDir();
    if (x[0] === "dir") {
        dir.push({ type: "dir", name: x[1], size: null, data: [] });
    }
    else {
        dir.push({ type: "file", name: x[1], size: parseInt(x[0]) });
    }
});
console.log(sys);
function getDir() {
    let currDir = sys.data;
    for (const e of pwd) {
        currDir = currDir.filter((x) => x.name === e)[0].data;
    }
    return currDir;
}