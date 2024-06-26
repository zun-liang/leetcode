type Fn = (n: number, i?: number) => any;

const filter = (arr: number[], fn: Fn): number[] => {
  const output: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn.length === 2 ? fn(arr[i], i) : fn(arr[i])) {
      output.push(arr[i]);
    }
  }
  return output;
};
