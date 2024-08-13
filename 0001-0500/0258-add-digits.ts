const addDigits = (num: number): number => {
  let result: number = num;
  while (result > 9) {
    let arr = result
      .toString()
      .split("")
      .map((n) => Number(n));
    let newNum = arr.reduce((a, c) => a + c, 0);
    result = newNum;
  }
  return result;
};
