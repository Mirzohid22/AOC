const { readFileSync } = require("fs");
const { join } = require("path");

const getFilePath = (filePath) => join(__dirname, filePath);

const input = readFileSync(getFilePath("input.txt"), "utf8")
  .replace(/\r\n/g, "\n")
  .trim()
  .split("\n\n")
  .map((elf) => elf.split("\n"));
const testInput = readFileSync(getFilePath("test.both.txt"), "utf8")
  .replace(/\r\n/g, "\n")
  .trim()
  .split("\n\n")
  .map((elf) => elf.split("\n"));

module.exports.getInput = function getInput() {
  return input;
};
module.exports.getTestInput = function getTestInput() {
  return testInput;
};
