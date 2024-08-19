function countCompleteDayPairs(hours: number[]): number {
  let pairs: number[][] = [];
  for (let i = 0; i < hours.length; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if ((hours[i] + hours[j]) % 24 === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs.length;
}
