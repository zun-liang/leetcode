function minSteps(s: string, t: string): number {
  let objS: { [key: string]: number } = {};
  let objT: { [key: string]: number } = {};
  for (let char of s) {
    objS[char] = (objS[char] || 0) + 1;
  }
  for (let char of t) {
    objT[char] = (objT[char] || 0) + 1;
  }
  let count: number = 0;
  for (let key in objS) {
    if (Object.keys(objT).includes(key)) {
      if (objS[key] > objT[key]) {
        count = count + (objS[key] - objT[key]);
      }
    } else {
      count += objS[key];
    }
  }
  return count;
}
