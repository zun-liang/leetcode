function areOccurrencesEqual(s: string): boolean {
  let obj: { [key: string]: number } = {};
  for (let char of s) {
    obj[char] = (obj[char] || 0) + 1;
  }
  console.log(obj);
  let values = Object.values(obj);
  let filtered = values.filter((x) => x !== values[0]);
  return !filtered.length;
}
