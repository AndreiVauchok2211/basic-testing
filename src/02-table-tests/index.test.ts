// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 4, b: 2, action: Action.Divide, expected: 2 },
  { a: 8, b: 2, action: Action.Divide, expected: 4 },
  { a: 1, b: 2, action: Action.Multiply, expected: 2 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 1, b: 2, action: Action.Exponentiate, expected: 1 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 1, b: '2', action: Action.Exponentiate, expected: null },
  { a: null, b: 2, action: Action.Exponentiate, expected: null },
  { a: 3, b: 2, action: 'Add', expected: null },
  { a: 3, b: '3', action: 'Divide', expected: null },
  // continue cases for other actions
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'table test',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
    20000,
  );
});
