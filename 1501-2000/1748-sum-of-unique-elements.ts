function sumOfUnique(nums: number[]): number {
  let obj: { [key: string]: number } = {};
  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }
  let sum: number = 0;
  for (let num in obj) {
    if (obj[num] === 1) {
      sum += Number(num);
    }
  }
  return sum;
}
