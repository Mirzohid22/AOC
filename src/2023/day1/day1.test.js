const {
  getInput,
  getTestPart1Input,
  getTestPart2Input,
} = require("./getInputs");
const { part1, part2 } = require("./solution");

test("inputs should be non-empty", () => {
  expect(getInput()).toBeTruthy();
  expect(getTestPart1Input()).toBeTruthy();
  expect(getTestPart2Input()).toBeTruthy();
});

test("Test input", () => {
  expect(part1(getTestPart1Input())).toEqual(142);
  expect(part2(getTestPart2Input())).toEqual(281);
});
