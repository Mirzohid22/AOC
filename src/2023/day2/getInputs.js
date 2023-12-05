const { readFileSync } = require("fs");
const { join } = require("path");

function readFile(path) {
  const file = readFileSync(join(__dirname, path), "utf8")
    .replace(/\r\n/g, "\n")
    .trim()
    .split("\n")
    .map((line) => {
      arr = line.split(":");
      const game = arr[0].split(" ")[1];
      const rounds = arr[1].trim().split(";");
      return {
        game,
        rounds,
      };
    });

  return file;
}

module.exports.getInput = readFile("input.txt");
module.exports.getTestInput = readFile("test.txt");
