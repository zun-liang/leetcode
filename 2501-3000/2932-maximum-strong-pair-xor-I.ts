const maximumStrongPairXor = (nums: number[]): number => {
  let result: number = 0;
  for (let x: number = 0; x < nums.length; x++) {
    for (let y: number = x; y < nums.length; y++) {
      if (Math.abs(nums[x] - nums[y]) <= Math.min(nums[x], nums[y])) {
        result = Math.max(result, nums[x] ^ nums[y]);
      }
    }
  }
  return result;
};

// Inspired by @jiangshanmeta/meta
