import luhnAlgorithm from '../algorithm.js';
import paymentMethod from '../payment-method.js';

test('luhn algorithm check should return true', () => {
  expect(luhnAlgorithm('4893 4702 1277 8911')).toBe(true);
});

test('luhn algorithm check should return false', () => {
  expect(luhnAlgorithm('4893 4702 1277 8912')).toBe(false);
});

test('should return visa result as a payment method', () => {
  expect(paymentMethod(4893470212778911)).toBe('visa');
});

test('should return mastercard result as a payment method', () => {
  expect(paymentMethod(5432207943936151)).toBe('master');
});
