const countPrimes = (n: number): number => {
  if (n <= 2) return 0;
  const isPrime: boolean[] = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime.reduce((count, prime) => (prime ? count + 1 : count), 0);
};
