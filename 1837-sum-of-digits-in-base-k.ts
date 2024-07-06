const sumBase = (n: number, k: number): number =>
  k === 10
    ? n
        .toString()
        .split("")
        .reduce((a, c) => a + Number(c), 0)
    : n
        .toString(k)
        .split("")
        .reduce((a, c) => a + Number(c), 0);