const firstUniqChar = (s: string): number => {
  const charMap = new Map<String, number>();
  for (const char of s) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (charMap.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
