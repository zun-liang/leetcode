const numberGame = (nums: number[]): number[] => {
  let arr: number[] = [];
  const newNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      arr[i + 1] = newNums[i];
    } else {
      arr[i - 1] = newNums[i];
    }
  }
  return arr;
};
