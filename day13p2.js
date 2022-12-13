const { readFileSync } = require("fs");

const file = readFileSync("13.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n");

const signals = file.filter((el) => el != "").map((text) => JSON.parse(text));

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

const sorted = signals.sort((a, b) => {
  let result = {};
  check(a, b, result);
  return result.rightOrder ? -1 : 1;
});

const first = sorted.findIndex((el) => JSON.stringify(el) === "[[2]]");
const second = sorted.findIndex((el) => JSON.stringify(el) === "[[6]]");

const key = (first + 1) * (second + 1);

console.log(key);
