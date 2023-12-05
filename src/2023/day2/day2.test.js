const { getInput, getTestInput } = require("./getInputs");
const { part1, part2 } = require("./solution");

test("Inputs should be non-empty", () => {
  expect(getInput).toBeTruthy();
  expect(getTestInput).toBeTruthy();
});

test("Part 1 test", () => {
  expect(part1(getTestInput)).toEqual(8);
});

test("Part 2 test", () => {
  expect(part2(getTestInput)).toEqual(2286);
});
