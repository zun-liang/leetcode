const reversePrefix = (word: string, ch: string): string => {
  if (word.includes(ch)) {
    const index = word.indexOf(ch);
    let slice = word.slice(0, index + 1);
    let left = word.slice(index + 1);
    let reverse = slice.split("").reverse().join("");
    return reverse + left;
  } else {
    return word;
  }
};
