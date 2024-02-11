// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule =
    jest.requireActual<typeof import('./index')>('./index');

  return {
    __esModele: true,
    ...originalModule,
    mockOne: jest.fn(),
    mockTwo: jest.fn(),
    mockThree: jest.fn(),
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    // Write your test here
    expect(mockOne).toHaveBeenCalledTimes(0);
    expect(mockTwo).toHaveBeenCalledTimes(0);
    expect(mockThree).toHaveBeenCalledTimes(0);
  });

  test('unmockedFunction should log into console', () => {
    // Write your test here
    const unmocked = jest.spyOn(console, 'log');
    unmockedFunction();
    expect(unmocked).toBeCalledWith('I am not mocked');
  });
});
