const findWordsContaining = (words: string[], x: string): number[] => {
  let arr: number[] = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      arr.push(i);
    }
  }
  return arr;
};
