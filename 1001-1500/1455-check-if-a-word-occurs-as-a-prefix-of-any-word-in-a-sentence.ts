const isPrefixOfWord = (sentence: string, searchWord: string): number => {
  let index = sentence.split(" ").findIndex((s) => s.startsWith(searchWord));
  if (index > -1) {
    return index + 1;
  }
  return -1;
};
