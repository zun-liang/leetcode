const findPermutationDifference = (s: string, t: string): number => {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let indexInT = t.indexOf(s[i]);
    let indexDifference = Math.abs(indexInT - i);
    sum += indexDifference;
  }
  return sum;
};
