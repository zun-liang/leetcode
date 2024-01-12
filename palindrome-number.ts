const isPalindrome = (x: number) =>
  String(x) === String(x).split("").reverse().join("");
