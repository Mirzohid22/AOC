const { readFileSync } = require("fs");

const file = readFileSync("13.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n\n");

const signals = file.map((signal) => {
  const [left, right] = signal.split("\n").map((text) => JSON.parse(text));
  return { left, right };
});

function check(left, right, result) {
  const leftIsNumber = typeof left === "number";
  const rightIsNumber = typeof right === "number";
  if (leftIsNumber && rightIsNumber) {
    if (left < right) {
      result.rightOrder = true;
      return;
    }
    if (left > right) {
      result.rightOrder = false;
      return;
    }
  } else if (!leftIsNumber && !rightIsNumber) {
    let index = 0;
    while (true) {
      if (index > left.length - 1 && index <= right.length - 1) {
        result.rightOrder = true;
        return;
      } else if (index <= left.length - 1 && index > right.length - 1) {
        result.rightOrder = false;
        return;
      } else if (index > left.length - 1 && index > right.length - 1) {
        return;
      }

      check(left[index], right[index], result);
      if (typeof result.rightOrder !== "undefined") {
        return;
      }

      index++;
    }
  } else {
    if (leftIsNumber) {
      check([left], right, result);
    } else {
      check(left, [right], result);
    }
  }
}

const sum = signals
  .map(({ left, right }, index) => {
    let result = {};
    check(left, right, result);
    return result.rightOrder ? index + 1 : 0;
  })
  .reduce((total, next) => total + next, 0);

console.log(sum);
