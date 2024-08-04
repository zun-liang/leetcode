const frequencySort = (nums: number[]): number[] => {
  const frequencyMap: Map<number, number> = new Map();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  return nums.sort((a, b) => {
    const freqA = frequencyMap.get(a)!;
    const freqB = frequencyMap.get(b)!;
    if (freqA === freqB) {
      return b - a;
    }
    return freqA - freqB;
  });
};
