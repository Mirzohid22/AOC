const { getInput, getTestInput } = require("./getInputs");
const { part1 } = require("./solution");

test("inputs should be non-empty", () => {
  expect(getInput()).toBeTruthy();
  expect(getTestInput()).toBeTruthy();
});

test("Test input", () => {
  expect(part1(getTestInput())).toEqual(142);
});
