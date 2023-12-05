const { getTestInput, getInput } = require("./getInputs");
const testElves = getTestInput();
const elves = getInput();

function part1(elves) {
  return Math.max(
    ...elves.map((elf) => elf.reduce((acc, curr) => acc + Number(curr), 0))
  );
}

// console.log("part1", part1(elves));
// console.log("test part1", part1(testElves));

module.exports.part1 = part1;
