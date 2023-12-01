const {
  getInput,
  getTestPart1Input,
  getTestPart2Input,
} = require("./getInputs");
const calibrations = getInput();
const testCalibrationsPart1 = getTestPart1Input();
const testCalibrationsPart2 = getTestPart2Input();
// part one
function part1(calibrations) {
  let sum = 0;
  for (let calibration of calibrations) {
    const arr = calibration
      .split("")
      .filter((calibration) => String(calibration).match(/[0-9]/g));
    const first = arr[0];
    const last = arr[arr.length - 1];
    sum += +(first + last);
  }
  return sum;
}
// part two
function part2(calibrations) {
  const digits = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  let sum = 0;

  for (let calibration of calibrations) {
    const findFirstCalibration = (calibration) => {
      for (let i = 0; i <= calibration.length; i++) {
        if (String(Number(calibration[i])) === calibration[i]) {
          return calibration[i];
        }
        for (let j = i + 1; j <= calibration.length; j++) {
          const word = calibration.slice(i, j);
          if (digits[word]) {
            return digits[word];
          }
        }
      }
    };

    const findLastCalibration = (calibration) => {
      for (let i = calibration.length; i >= 0; i--) {
        if (String(Number(calibration[i])) === calibration[i]) {
          return calibration[i];
        }
        for (let j = i - 1; j >= 0; j--) {
          const word = calibration.slice(j, i);
          if (digits[word]) {
            return digits[word];
          }
        }
      }
    };

    const first = findFirstCalibration(calibration);
    const last = findLastCalibration(calibration);
    sum += +(first + last);
  }
  return sum;
}
console.log("test part1", part1(testCalibrationsPart1));
console.log("part1", part1(calibrations));
console.log("test part2", part2(testCalibrationsPart2));
console.log("part2", part2(calibrations));
module.exports.part1 = part1;
module.exports.part2 = part2;
