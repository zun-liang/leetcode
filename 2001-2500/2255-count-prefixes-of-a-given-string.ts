const countPrefixes = (words: string[], s: string): number =>
  words.filter((w) => s.startsWith(w)).length;
