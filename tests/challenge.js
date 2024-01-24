// implement the functions to pass as many of the tests in js-challenges.test.js as you can

export function sum(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

// these are much much harder - it's a huge stretch goal, don't worry about getting these done.
export function isPalindrome(string) {
  const arrayValues = string.split("");
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join("");
  if (string == reverseString) {
    return "It is a palindrome";
  } else {
    return "It is not a palindrome";
  }
}

export function isAnagram() {
  // implement function
}

export function countLetters() {
  // implement function
}
