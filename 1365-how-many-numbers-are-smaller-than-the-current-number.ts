const smallerNumbersThanCurrent = (nums: number[]): number[] => {
  let arr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    arr.push(count);
  }
  return arr;
};
