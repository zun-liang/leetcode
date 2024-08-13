const sortedSquares = (nums: number[]): number[] =>
  nums.map((x) => Math.pow(x, 2)).sort((a, b) => a - b);
