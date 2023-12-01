const { getInput, getTestInput } = require("./getInputs");
const { part1 } = require("./solution");
const input = getInput();
const testInput = getTestInput();

test("inputs should be non-empty", () => {
  expect(input).toBeTruthy();
  expect(testInput).toBeTruthy();
});

test("Test input", () => {
  expect(part1(testInput)).toEqual(24000);
});
