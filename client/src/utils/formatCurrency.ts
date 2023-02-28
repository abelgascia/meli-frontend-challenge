export const formatCurrency = (number: number) =>
  new Intl.NumberFormat().format(number);

export const formatDecimals = (number: number) => {
  if (number <= 9) {
    return `0${number}`;
  }
  return number;
};
