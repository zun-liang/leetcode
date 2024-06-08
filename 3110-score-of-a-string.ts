const scoreOfString = (string: String): number => {
  let score = 0;
  for (let i = 0; i < string.length - 1; i++) {
    score += Math.abs(string.charCodeAt(i) - string.charCodeAt(i + 1));
  }
  return score;
};
