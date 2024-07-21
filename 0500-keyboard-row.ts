const findWords = (words: string[]): string[] => {
  const row1 = /[qwertyuiop]/gi;
  const row2 = /[asdfghjkl]/gi;
  const row3 = /[zxcvbnm]/gi;
  const newWords = words.map((word) =>
    word.replace(row1, "1").replace(row2, "2").replace(row3, "3")
  );
  const isFromSameRow = (str: string): boolean => {
    const arr = str.split("");
    const sum = arr.reduce(
      (a, c) => a + Math.abs(Number(c) - Number(arr[0])),
      0
    );
    return sum === 0;
  };
  const filteredNewWords = newWords.map((curr) => isFromSameRow(curr));
  let results: string[] = [];
  for (let i = 0; i < words.length; i++) {
    if (filteredNewWords[i]) {
      results.push(words[i]);
    }
  }
  return results;
};
