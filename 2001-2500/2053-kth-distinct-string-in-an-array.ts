function kthDistinct(arr: string[], k: number): string {
  let distinct: string[] = [];
  let frequency: { [key: string]: number } = {};
  for (let item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;
  }
  for (let count in frequency) {
    if (frequency[count] === 1) {
      distinct.push(count);
    }
  }
  return distinct[k - 1] || "";
}
