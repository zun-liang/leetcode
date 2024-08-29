const longestPrefix = (s: string): string => {
  let overlapArr: string[] = [];
  for (let i = 1; i < s.length; i++) {
    if (s.slice(0, i) === s.slice(-i)) {
      overlapArr.push(s.slice(-i));
    }
  }
  return overlapArr[overlapArr.length - 1] || "";
};
