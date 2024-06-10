const numJewelsInStones = (jewels: string, stones: string): number => {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    const regex = new RegExp(jewels[i], "g");
    const matches = stones.match(regex);
    if (matches) {
        count += matches.length;
    }
  }
  return count;
};
