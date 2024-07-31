const isSameAfterReversals = (num: number): boolean => {
  if (num > 0 && num.toString().endsWith("0")) return false;
  return true;
};
