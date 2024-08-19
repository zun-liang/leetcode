function decimalToBinary(decimal: number): string {
  if (decimal === 0) return "0";
  let binary: string = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

function countOne(str: string): number {
  return str
    .split("")
    .map((x) => Number(x))
    .reduce((a, c) => a + c);
}

function sortByBits(arr: number[]): number[] {
  let frequency: { [key: string]: number } = {};
  for (let num of arr) {
    frequency[num] = countOne(decimalToBinary(num));
  }
  return arr.sort((a, b) => {
    const freqA = frequency[a.toString()];
    const freqB = frequency[b.toString()];
    if (freqA === freqB) {
      return a - b;
    }
    return freqA - freqB;
  });
}
