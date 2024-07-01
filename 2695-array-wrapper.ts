class ArrayWrapper {
  nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
  }
  valueOf(): number {
    return this.nums.reduce((a, n) => a + n, 0);
  }
  toString(): string {
    return `[${this.nums.join(",")}]`;
  }
}
