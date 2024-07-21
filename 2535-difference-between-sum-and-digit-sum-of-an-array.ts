const differenceOfSum = (nums: number[]): number => {
  const sum1 = nums.reduce((a, c) => a + c, 0);
  const sum2 = nums
    .join("")
    .split("")
    .reduce((a, c) => a + Number(c), 0);
  return Math.abs(sum1 - sum2);
};
