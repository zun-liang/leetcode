const countSymmetricIntegers = (low: number, high: number): number => {
  let result: number[] = [];
  for (let i = low; i <= high; i++) {
    const str = i.toString();
    const halfLength = str.length / 2;
    const firstHalf = str.slice(0, halfLength);
    const secondHalf = str.slice(halfLength);
    const firstSum = firstHalf.split("").reduce((a, n) => a + Number(n), 0);
    const secondSum = secondHalf.split("").reduce((a, n) => a + Number(n), 0);
    if (Number.isInteger(halfLength) && firstSum === secondSum) {
      result.push(i);
    }
  }
  return result.length;
};
