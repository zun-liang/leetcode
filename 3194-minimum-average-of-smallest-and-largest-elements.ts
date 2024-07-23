const minimumAverage = (nums: number[]): number => {
  let n: number = nums.length;
  let averages: number[] = [];
  while (nums.length > 0) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let minIndex = nums.indexOf(min);
    nums = [...nums.slice(0, minIndex), ...nums.slice(minIndex + 1)];
    let maxIndex = nums.indexOf(max);
    nums = [...nums.slice(0, maxIndex), ...nums.slice(maxIndex + 1)];
    averages.push((min + max) / 2);
  }
  return Math.min(...averages);
};
