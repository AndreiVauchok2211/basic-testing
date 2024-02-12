// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

describe('BankAccount', () => {
  jest.mock('lodash', () => ({
    random: jest.fn().mockReturnValue(1),
  }));

  test('should create account with initial balance', () => {
    // Write your test here
    const account = getBankAccount(20);
    expect(account.getBalance()).toBe(20);
    expect(getBankAccount(3442).getBalance()).toBe(3442);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    expect(() => getBankAccount(32).withdraw(345)).toThrow(
      InsufficientFundsError,
    );
    expect(getBankAccount(32).withdraw(30)).toEqual({ _balance: 2 });
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const account = getBankAccount(200);
    const account1 = getBankAccount(100);
    expect(() => account.transfer(345, account1)).toThrow();
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    const account = getBankAccount(200);
    expect(() => account.transfer(345, account)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    // Write your test here
    expect(getBankAccount(30).deposit(30)).toEqual({ _balance: 60 });
  });

  test('should withdraw money', () => {
    // Write your test here
    expect(getBankAccount(32).withdraw(30)).toEqual({ _balance: 2 });
  });

  test('should transfer money', () => {
    // Write your test here
    const account2 = getBankAccount(100);
    const account3 = getBankAccount(100);
    expect(account2.transfer(50, account3)).toEqual({ _balance: 50 });
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // jest.mock('lodash', () => ({
    //   random: jest.fn().mockReturnValue(1),
    // }));

    const balance = await getBankAccount(100).fetchBalance();
    expect(typeof balance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    const account = getBankAccount(0);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(100);
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(100);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    const account = getBankAccount(0);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(null);
    await expect(account.synchronizeBalance()).rejects.toThrowError(
      SynchronizationFailedError,
    );
  });
});
