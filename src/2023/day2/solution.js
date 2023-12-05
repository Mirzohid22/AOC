const { getInput, getTestInput } = require("./getInputs");
const input = getInput;
const testInput = getTestInput;

function part1(input) {
  let sum = 0;
  const redMax = 12;
  const greenMax = 13;
  const blueMax = 14;
  for (let line of input) {
    const blues = [];
    const greens = [];
    const reds = [];
    const rounds = line.rounds;
    for (let round of rounds) {
      const steps = round.split(", ");
      for (let step of steps) {
        step = step.trim();
        const [number, color] = step.split(" ");
        if (color === "red") {
          reds.push(+number);
        } else if (color === "green") {
          greens.push(+number);
        } else if (color === "blue") {
          blues.push(+number);
        }
      }
    }
    if (
      redMax >= Math.max(...reds) &&
      greenMax >= Math.max(...greens) &&
      blueMax >= Math.max(...blues)
    ) {
      sum += +line.game;
    }
  }

  return sum;
}

// console.log(input);
// console.log(part1(input));
// console.log(part1(testInput));
module.exports.part1 = part1;
