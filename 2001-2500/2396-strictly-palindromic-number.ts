const conversion = (n: number, r: number): string => {
  let digits: number[] = [];
  let num: number = n;
  while (num > 0) {
    let remainder = num % r;
    digits.push(remainder);
    num = Math.floor(num / r);
  }
  digits.reverse();
  return digits.join("");
};

const isStrictlyPalindromic = (n: number): boolean => {
  let result: boolean = true;
  let converted: string = "";
  for (let i = 2; i <= n - 2; i++) {
    converted = conversion(n, i);
    let reversed = converted.split("").reverse().join("");
    if (converted !== reversed) {
      result = false;
    }
  }
  return result;
};
