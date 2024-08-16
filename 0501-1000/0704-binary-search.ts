const search = (nums: number[], target: number): number => {
  let mid: number,
    left: number = 0,
    right: number = nums.length - 1;
  while (left <= right) {
    mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

// Inspired by @youngyangyang04/leetcode-master
