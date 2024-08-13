const minimumOperations = (nums: number[]): number =>
  nums.filter((num) => num % 3 !== 0).length;
