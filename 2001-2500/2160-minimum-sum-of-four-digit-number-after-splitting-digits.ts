const minimumSum = (num: number): number => {
  const arr = num
    .toString()
    .split("")
    .sort((a, b) => Number(a) - Number(b));
  console.log(arr);
  const newNum1 = Number(arr[0] + arr[2]);
  const newNum2 = Number(arr[1] + arr[3]);
  return newNum1 + newNum2;
};
