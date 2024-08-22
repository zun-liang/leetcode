const twoSum = (nums: number[], target: number): number[] => {
  let hash: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [i, hash[target - nums[i]]];
    }
    hash[nums[i]] = i;
  }
  return [];
};

// Inspired by @youngyangyang04/leetcode-master
