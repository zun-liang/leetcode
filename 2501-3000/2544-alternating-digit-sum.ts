const alternateDigitSum = (n: number): number => {
  const arr: string[] = n.toString().split("");
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(Number(arr[i]));
    } else {
      newArr.push(Number("-" + arr[i]));
    }
  }
  return newArr.reduce((a, c) => a + c, 0);
};
