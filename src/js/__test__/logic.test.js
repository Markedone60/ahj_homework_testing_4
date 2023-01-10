import luhnAlgorithm from '../algorithm.js';
import paymentMethod from '../payment-method.js';

test('luhn algorithm check should return true', () => {
  expect(luhnAlgorithm('4893 4702 1277 8911')).toBe(true);
});

test('luhn algorithm check should return false', () => {
  expect(luhnAlgorithm('4893 4702 1277 8912')).toBe(false);
});

test('should return visa result', () => {
  expect(paymentMethod(4893470212778911)).toBe('visa');
});

test.each([
  [375944451251251, 'amex'],
  [2204222222222222, 'mir'],
  [4444444444444, 'visa'],
  [5201111111111111, 'mastercard'],
  [347000000000000, 'amex'],
])('should return correct results', (value, result) => {
  expect(paymentMethod(value)).toBe(result);
});