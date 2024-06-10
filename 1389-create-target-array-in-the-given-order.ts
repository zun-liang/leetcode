const createTargetArray = (nums: number[], index: number[]): number[] => {
  let targetArr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(i, targetArr);
    targetArr = [...targetArr.slice(0, index[i])].concat(nums[i], [
      ...targetArr.slice(index[i]),
    ]);
  }
  return targetArr;
};
