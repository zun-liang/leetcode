const restoreString = (s: string, indices: number[]): string => {
  let arr: string[] = s.split("");
  let newArr: string[] = [];
  for (let i = 0; i < indices.length; i++) {
    newArr[indices[i]] = arr[i];
  }
  return newArr.join("");
};
