const majorityElement = (nums: number[]): number =>
  nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
