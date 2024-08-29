const firstPalindrome = (words: string[]): string =>
  words.find((w) => w.split("").reverse().join("") === w) || "";
