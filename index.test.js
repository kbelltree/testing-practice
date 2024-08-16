import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index";

test("capitalize takes a string, capitalize it, and returns it ", () => {
  expect(capitalize("capitalized")).toBe("Capitalized");
  expect(capitalize("CAPITALIZED")).toBe("Capitalized");
  expect(capitalize("cAPITALIZED")).toBe("Capitalized");
  expect(capitalize("capitalized string")).toBe("Capitalized string");
  expect(capitalize("123")).toBe("123");
  expect(() => capitalize(123)).toThrow("Only string is allowed");
  expect(() => capitalize("   ")).toThrow(
    "Invalid input: Empty string is not allowed. Please provide a non-empty string."
  );
});

test("reverseString takes a string and returns it reversed", () => {
  expect(reverseString("reversed")).toBe("desrever");
  expect(reverseString("reversed string")).toBe("gnirts desrever");
  expect(reverseString("123")).toBe("321");
  expect(() => reverseString(123)).toThrow("Only string is allowed");
  expect(() => reverseString("")).toThrow(
    "Invalid input: Empty string is not allowed. Please provide a non-empty string."
  );
});

describe("calculator methods take two numbers and returns the result", () => {
  // test for add
  test("add method", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(1.5, 2.5)).toBe(4);
    expect(calculator.add(1, 2, 3)).toBe(3);
    expect(calculator.add(1)).toBe(1);
    expect(() => calculator.add("1", "one")).toThrow("Pass only numbers");
  });
  //   test for subtract
  test("subtract method", () => {
    expect(calculator.subtract(3, 2)).toBe(1);
    expect(calculator.subtract(-1, -1)).toBe(0);
    expect(calculator.subtract(100, 20)).toBe(80);
    expect(calculator.subtract(5.5, 2.5)).toBe(3);
    expect(calculator.subtract(1, 2, 3)).toBe(-1);
    expect(calculator.subtract(1)).toBe(1);
    expect(() => calculator.subtract("1", "one")).toThrow("Pass only numbers");
  });
  //   test for divide;
  test("divide method", () => {
    expect(calculator.divide(3, 2)).toBe(1.5);
    expect(calculator.divide(-10, 5)).toBe(-2);
    expect(calculator.divide(1, 0)).toBe(Infinity);
    expect(calculator.divide(-1, 0)).toBe(-Infinity);
    expect(calculator.divide(0, 5)).toBe(0);
    expect(calculator.divide(110, 2.5)).toBe(44);
    expect(calculator.divide(1, 2, 3)).toBe(0.5);
    expect(calculator.divide(1)).toBe(1);
    expect(() => calculator.divide("1", "one")).toThrow("Pass only numbers");
  });
  //   test for multiply;
  test("multiply method", () => {
    expect(calculator.multiply(3, 0)).toBe(0);
    expect(calculator.multiply(-10, 5)).toBe(-50);
    expect(calculator.multiply(1.5, 3)).toBe(4.5);
    expect(calculator.multiply(-1, -1)).toBe(1);
    expect(calculator.multiply(1, -1)).toBe(-1);
    expect(calculator.multiply(1, 2, 3)).toBe(2);
    expect(calculator.multiply(1)).toBe(1);
    expect(() => calculator.multiply("1", "one")).toThrow("Pass only numbers");
  });
});

test("caesarCipher takes a string and a shift factor, then returns it in encrypted version", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 29)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("xyz", -3)).toBe("uvw");
  expect(caesarCipher("Hello", -12)).toBe("Vszzc");
  expect(() => caesarCipher(123)).toThrow("Only string is allowed");
  expect(() => caesarCipher(" ")).toThrow(
    "Invalid input: Empty string is not allowed. Please provide a non-empty string."
  );
  expect(() => caesarCipher("xyz", 0.3)).toThrow("Only an integer is allowed.");
});

test("analyzeArray takes an array of numbers, and returns an object containing average, min, max, and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(() =>
    analyzeArray([1, a, 8]).toThrow("Array should contain only number values")
  );
  expect(() => analyzeArray([])).toThrow(
    "Invalid input: Empty array is not allowed. Please provide array of numbers."
  );
});
