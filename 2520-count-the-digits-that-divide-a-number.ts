const countDigits = (num: number): number => {
  let result: number = 0;
  let arr: string[] = num.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    if (num % Number(arr[i]) === 0) {
      result++;
    }
  }
  return result;
};
