const removeElement = (nums: number[], val: number): number => {
  let k: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

console.log(removeElement([3, 2, 2, 3], 3));
