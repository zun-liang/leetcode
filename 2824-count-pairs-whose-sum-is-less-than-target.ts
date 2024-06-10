const countPairs = (nums: number[], target: number): number => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      if (sum < target) {
        count++;
      }
    }
  }
  return count;
};
