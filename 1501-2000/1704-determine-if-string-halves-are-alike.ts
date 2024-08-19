function halvesAreAlike(s: string): boolean {
  let regex = /[aeiou]/i;
  let a: string = s.slice(0, s.length / 2);
  let b: string = s.slice(s.length / 2);
  let countInA: number = a.split("").filter((x) => regex.test(x)).length;
  let countInB: number = b.split("").filter((x) => regex.test(x)).length;
  return countInA === countInB;
}
