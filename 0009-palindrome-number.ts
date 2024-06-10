const isPalindrome = (x: number): boolean =>
  String(x) === String(x).split("").reverse().join("");
