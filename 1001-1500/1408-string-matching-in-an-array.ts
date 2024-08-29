const stringMatching = (words: string[]): string[] => {
  let result: string[] = [];
  for (let i = 0; i < words.length; i++) {
    let regex = new RegExp(words[i], "g");
    for (let j = 0; j < words.length; j++) {
      const matches = words[j].match(regex);
      if (matches && i !== j) {
        result.push(words[i]);
      }
    }
  }
  return [...new Set(result)];
};
