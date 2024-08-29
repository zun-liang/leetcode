const isPrefixAndSuffix = (str1: string, str2: string): boolean =>
  str2.startsWith(str1) && str2.endsWith(str1);

const countPrefixSuffixPairs = (words: string[]): number => {
  let count: number = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) {
        count++;
      }
    }
  }
  return count;
};
