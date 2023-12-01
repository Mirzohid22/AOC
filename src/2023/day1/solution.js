const { getInput, getTestInput } = require("./getInputs");
const calibrations = getInput();
const testCalibrations = getTestInput();
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
console.log(part1(calibrations));
console.log(part1(testCalibrations));
module.exports.part1 = part1;
