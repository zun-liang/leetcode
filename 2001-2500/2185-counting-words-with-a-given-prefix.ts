const prefixCount = (words: string[], pref: string): number =>
  words.filter((s) => s.startsWith(pref)).length;
