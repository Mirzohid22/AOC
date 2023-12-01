const { readFileSync } = require("fs");
const { join } = require("path");
const getFilePath = (filePath) => join(__dirname, filePath);

const input = readFileSync(getFilePath("input.txt"), "utf8")
  .replace(/\r\n/g, "\n")
  .trim()
  .split("\n");
const testPart1 = readFileSync(getFilePath("test.part1.txt"), "utf8")
  .replace(/\r\n/g, "\n")
  .trim()
  .split("\n");
const testPart2 = readFileSync(getFilePath("test.part2.txt"), "utf8")
  .replace(/\r\n/g, "\n")
  .trim()
  .split("\n");
module.exports.getInput = function getInput() {
  return input;
};
module.exports.getTestPart1Input = function getTestPart1() {
  return testPart1;
};
module.exports.getTestPart2Input = function getTestPart2() {
  return testPart2;
};
