const kidsWithCandies = (
  candies: number[],
  extraCandies: number
): boolean[] => {
  let newArr: number[] = [];
  let result: boolean[] = [];
  for (let i = 0; i < candies.length; i++) {
    newArr = [
      ...candies.slice(0, i),
      candies[i] + extraCandies,
      ...candies.slice(i + 1),
    ];
    result.push(Math.max(...newArr) === candies[i] + extraCandies);
  }
  return result;
};
