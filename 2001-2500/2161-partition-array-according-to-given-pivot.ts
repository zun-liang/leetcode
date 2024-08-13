const pivotArray = (nums: number[], pivot: number): number[] => {
  let less: number[] = [];
  let equal: number[] = [];
  let greater: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      less.push(nums[i]);
    } else if (nums[i] === pivot) {
      equal.push(nums[i]);
    } else {
      greater.push(nums[i]);
    }
  }
  return [...less, ...equal, ...greater];
};
