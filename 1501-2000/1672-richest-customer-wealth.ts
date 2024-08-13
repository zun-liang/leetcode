const maximumWealth = (accounts: number[][]): number => {
  let wealthArr: number[] = [];
  for (let i = 0; i < accounts.length; i++) {
    let wealth: number = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j];
    }
    wealthArr.push(wealth);
  }
  return Math.max(...wealthArr);
};
