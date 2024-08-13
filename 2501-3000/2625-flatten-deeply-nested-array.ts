type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = (arr: MultiDimensionalArray, n: number): MultiDimensionalArray => {
  const flattened: MultiDimensionalArray = [];
  for (let item of arr) {
    if (Array.isArray(item) && n > 0) {
      flattened.push(...flat(item, n - 1));
    } else {
      flattened.push(item);
    }
  }
  return flattened;
};
