const leftRightDifference = (nums: number[]): number[] => {
  let answer: number[] = [];
  if (nums.length === 1) {
    return [0];
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        answer.push([...nums.slice(1)].reduce((a, c) => a + c));
      } else if (i === nums.length - 1) {
        answer.push([...nums.slice(0, i)].reduce((a, c) => a + c));
      } else {
        answer.push(
          Math.abs(
            [...nums.slice(0, i)].reduce((a, c) => a + c) -
              [...nums.slice(i + 1)].reduce((a, c) => a + c)
          )
        );
      }
    }
    return answer;
  }
};
