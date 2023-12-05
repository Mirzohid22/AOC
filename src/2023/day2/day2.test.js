const { getInput, getTestInput } = require("./getInputs");
const { part1 } = require("./solution");

test("Inputs should be non-empty", () => {
  expect(getInput).toBeTruthy();
  expect(getTestInput).toBeTruthy();
});

test("Part 1 test", () => {
  expect(part1(getTestInput)).toEqual(8);
});
