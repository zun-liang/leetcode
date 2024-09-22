const mostCommonWord = (paragraph: string, banned: string[]): string => {
  const arr = paragraph
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter((x) => x !== "");
  console.log(arr);
  const wordMap = new Map<string, number>();
  for (const word of arr) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }
  for (let i = 0; i < banned.length; i++) {
    if (wordMap.get(banned[i])! > 0) {
      wordMap.set(banned[i], 0);
    }
  }
  let maxString: string = "";
  let maxValue = 0;
  for (const [key, value] of wordMap.entries()) {
    if (value > maxValue) {
      maxValue = value;
      maxString = key;
    }
  }
  return maxString;
};
