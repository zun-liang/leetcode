const minSubArrayLen = (target: number, nums: number[]): number => {
  let start: number = 0,
    result: number = Infinity,
    subLen: number = 0,
    sum: number = 0;
  for (let end: number = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= target) {
      subLen = end - start + 1;
      result = Math.min(result, subLen);
      sum -= nums[start];
      start++;
    }
  }
  return result === Infinity ? 0 : result;
};
