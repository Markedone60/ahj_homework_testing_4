export default function paymentMethod(value) {
  const mir = new RegExp('^220(0|4)[0-9]{12}[0-9]*$');
  const visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
  const master = new RegExp('^5[1-5][0-9]{14}$');
  const amex = new RegExp('^3[47][0-9]{13}$');

  if (mir.test(value)) {
    return 'mir';
  }

  if (visa.test(value)) {
    return 'visa';
  }

  if (master.test(value)) {
    return 'mastercard';
  }

  if (amex.test(value)) {
    return 'amex';
  }

  return undefined;
}