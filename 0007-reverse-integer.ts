const reverse = (x: number): number => {
  let reversal: number = 0;
  if (x >= 0) {
    reversal = Number(x.toString().split("").reverse().join(""));
  } else {
    reversal = Number(`-${x.toString().split("").slice(1).reverse().join("")}`);
  }
  if (reversal < Math.pow(-2, 31) || reversal > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return reversal;
  }
};
