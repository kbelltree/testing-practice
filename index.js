// This utility function is to validate that element is a string, and throw an error if not
function ensureString(element) {
  if (typeof element !== "string") {
    throw new Error("Only string is allowed");
  }
  if (element.trim().length === 0) {
    throw new Error(
      "Invalid input: Empty string is not allowed. Please provide a non-empty string."
    );
  }
}

// A capitalize function that takes a string and returns it with the first character capitalized.
export function capitalize(string) {
  ensureString(string);
  return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

// A reverseString function that takes a string and returns it reversed.
export function reverseString(string) {
  ensureString(string);
  return string.split("").reverse().join("");
}

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
export const calculator = {
  // Validate that the values are numbers, and throw an error if not
  ensureTwoNumbersPassed: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Pass only numbers");
    }
  },
  add: function (num1 = 0, num2 = 0) {
    this.ensureTwoNumbersPassed(num1, num2);
    return num1 + num2;
  },
  subtract: function (num1 = 0, num2 = 0) {
    this.ensureTwoNumbersPassed(num1, num2);
    return num1 - num2;
  },
  divide: function (num1 = 1, num2 = 1) {
    this.ensureTwoNumbersPassed(num1, num2);
    return num1 / num2;
  },
  multiply: function (num1 = 1, num2 = 1) {
    this.ensureTwoNumbersPassed(num1, num2);
    return num1 * num2;
  },
};

// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.

// This helper function returns an object that maps each letter of the alphabet in standard order to its corresponding letter in the "shifted" alphabet
// The returned object can be used to directly look up the encrypted letter for each letter in the alphabet
function getShiftedAlphabetMap(shiftFactor) {
  const properOrder = "abcdefghijklmnopqrstuvwxyz";

  // Return any size of a number less than 26
  let shiftCount = shiftFactor % 26;

  // Transform negative shiftCount into the corresponding positive value
  if (shiftCount < 0) {
    shiftCount += 26;
  }
  const shiftedOrder =
    properOrder.substring(shiftCount) + properOrder.substring(0, shiftCount);
  let alphabetMap = {};
  for (let i = 0; i < properOrder.length; i++) {
    alphabetMap[properOrder[i]] = shiftedOrder[i];
  }
  return alphabetMap;
}

// This helper function returns boolean to keep the original letter case upon encryption
function isUpperCase(letter) {
  return letter === letter.toUpperCase();
}

export function caesarCipher(string, shiftFactor) {
  ensureString(string);

  // Validate that shiftFactor is an integer, and throw an error if not
  if (!Number.isInteger(shiftFactor)) {
    throw new Error("Only an integer is allowed.");
  }
  const shiftedAlphabetMap = getShiftedAlphabetMap(shiftFactor);

  // This variable keeps encrypted characters assembled in order
  let result = "";
  for (let character of string) {
    // Convert the alphabetic character to lower case to consistently look up shiftedAlphabetMap
    let lowerCaseAlphabet = character.toLowerCase();

    // If the character is an alphabetic character, find its encrypted version
    if (shiftedAlphabetMap[lowerCaseAlphabet]) {
      // Maintain the original case of the character in the result
      if (isUpperCase(character)) {
        result += shiftedAlphabetMap[lowerCaseAlphabet].toUpperCase();
      } else {
        result += shiftedAlphabetMap[lowerCaseAlphabet];
      }

      // Non-alphabetic characters are added to the result as-is
    } else {
      result += character;
    }
  }
  return result;
}

// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
export function analyzeArray(array) {
  // Validate that array is not empty, and throw an error if it is
  if (array.length === 0) {
    throw new Error(
      "Invalid input: Empty array is not allowed. Please provide array of numbers."
    );
  }

  // Validate that all values in the array are numbers, and throw an error if not
  if (array.some((value) => typeof value !== "number")) {
    throw new Error("Array should contain only number values");
  }
  return {
    average:
      array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
