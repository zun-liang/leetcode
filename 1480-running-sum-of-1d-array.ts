const runningSum = (nums: number[]): number[] =>
  nums.map((n, i) => [...nums.slice(0, i + 1)].reduce((a, c) => a + c));
