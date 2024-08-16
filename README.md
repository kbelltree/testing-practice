# testing-practice

## Project: Testing Practice

This project is a practice exercise for Test Driven Development (TDD) using **Jest** in JavaScript. For comprehensive details on this project, please refer to [The Odin Project - Project: Testing Practice](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice).

## Key Project Instructions:

Write tests for the following functions and ensure that all tests pass.

### Functions To Test

- `capitalize`:<br>
  Capitalizes the first letter of a string.
- `reverseString`:<br>
  Reverses the order of a string.
- `calculator` **object** containing the following methods:
  - `add`
  - `subtract`
  - `divide`
  - `multiply`
- `caesarCipher`:<br>
  Takes a string and a shift factor, returning an encrypted ("shifted") version of the string.
  <br>
  **Requirements:**<br>

  1. The alphabet should wrap around according to the shift factor, e.g., **caesarCipher('xyz', 3)** should return **'abc'**.
  2. The case of each letter should remain the same as in the original string, e.g., **caesarCipher('HeLLo', 3)** should return **'KhOOr'**.
  3. Punctuation and other special characters should remain unchanged, e.g., **caesarCipher('Hello, World!', 3)** should return **'Khoor, Zruog!'**.

- `analyzeArray`:<br>
  TTakes an array of numbers as a parameter and returns an object containing the `average`, `min`, `max`, `length` of the array.

  **[Link to My Functions](./index.js)** <br>
  **[Link to My Tests](./index.test.js)**

## Built With

- JavaScript
- Prettier
- Jest

---

### Referenced Tutorials

[Test-Driven Development Tutorial – How to Test Your JavaScript and ReactJS Applications by freeCodeCamp](https://www.freecodecamp.org/news/test-driven-development-tutorial-how-to-test-javascript-and-reactjs-app/#heading-javascript-example-of-a-test-driven-development-workflow)

[3 The Caesar Cipher and Modular Arithmetic by Scott Sutherland](https://www.math.stonybrook.edu/~scott/papers/MSTP/crypto/3Caesar_Cipher.html)

[How to get min or max of an array in JavaScript by Vlad Bezden](https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa)

[How to Check if a String is Empty or Null in JavaScript – JS Tutorial by freeCodeCamp](https://www.w3schools.com/jsref/jsref_some.asp)
