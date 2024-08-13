const shuffle = (nums: number[], n: number): number[] => {
  let arr: number[] = [];
  for (let i = 0; i < n; i++) {
    arr.push(nums[i], nums[n + i]);
  }
  return arr;
};
