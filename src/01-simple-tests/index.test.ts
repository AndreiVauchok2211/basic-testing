// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    expect(
      simpleCalculator({
        a: 2,
        b: 3,
        action: Action.Add,
      }),
    ).toBe(5);
    expect(
      simpleCalculator({
        a: 4,
        b: 3,
        action: Action.Add,
      }),
    ).not.toBe(1);
  });

  test('should subtract two numbers', () => {
    expect(
      simpleCalculator({
        a: 5,
        b: 3,
        action: Action.Subtract,
      }),
    ).toBe(2);
    expect(
      simpleCalculator({
        a: '3',
        b: 3,
        action: Action.Subtract,
      }),
    ).toBe(null);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    expect(
      simpleCalculator({
        a: 5,
        b: 3,
        action: Action.Multiply,
      }),
    ).toBe(15);
    expect(
      simpleCalculator({
        a: 5,
        b: 5,
        action: Action.Multiply,
      }),
    ).toBe(25);
  });

  test('should divide two numbers', () => {
    // Write your test here
    expect(
      simpleCalculator({
        a: 6,
        b: 3,
        action: Action.Divide,
      }),
    ).toBe(2);
    expect(
      simpleCalculator({
        a: 15,
        b: 3,
        action: Action.Divide,
      }),
    ).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    expect(
      simpleCalculator({
        a: 3,
        b: 3,
        action: Action.Exponentiate,
      }),
    ).toBe(27);
    expect(
      simpleCalculator({
        a: 3,
        b: 0,
        action: Action.Exponentiate,
      }),
    ).toBe(1);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    expect(
      simpleCalculator({
        a: 3,
        b: 0,
        action: 3,
      }),
    ).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    expect(
      simpleCalculator({
        a: '3',
        b: 3,
        action: Action.Subtract,
      }),
    ).toBe(null);
  });
});
