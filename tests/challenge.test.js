import { expect, test } from "vitest";

import { sum, subtract, multiply, divide, isPalindrome } from "./challenge.js";

// test("sum", function () {
//   const expected = 4;
//   const actual = sum(2, 2);
//   expect(actual).toBe(expected);
// });

// test("subtract", function () {
//   const expected = 4;
//   const actual = subtract(6, 2);
//   expect(actual).toBe(expected);
// });

// test("multiply", function () {
//   const expected = 4;
//   const actual = multiply(2, 2);
//   expect(actual).toBe(expected);
// });

// test("divide", function () {
//   const expected = 4;
//   const actual = divide(20, 5);
//   expect(actual).toBe(expected);
// });

test("isPalindrome", function () {
  const expected = "It is a palindrome";
  const actual = isPalindrome(racecar);
  expect(actual).toBe(expected);
});
