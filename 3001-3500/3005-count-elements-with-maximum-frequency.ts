function maxFrequencyElements(nums: number[]): number {
  let frequency: { [key: string]: number } = {};
  for (let num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
  }
  let values = Object.values(frequency);
  let max = Math.max(...values);
  let count = values.filter((x) => x === max);
  if (count.length > 1) {
    return count.length * max;
  } else {
    return max;
  }
}
