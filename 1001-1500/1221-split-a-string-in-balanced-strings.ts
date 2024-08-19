function balancedStringSplit(s: string): number {
  let result: number = 0;
  let balance: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      balance--;
    } else if (s[i] === "R") {
      balance++;
    }
    if (balance === 0) {
      result++;
    }
  }
  return result;
}
