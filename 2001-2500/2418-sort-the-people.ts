const sortPeople = (names: string[], heights: number[]): string[] => {
  let sortedNames: string[] = [];
  let arr: [string, number][] = [];
  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], heights[i]]);
  }
  arr.sort((a, b) => b[1] - a[1]);
  sortedNames = arr.map((a) => a[0]);
  return sortedNames;
};
