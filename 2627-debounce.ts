type F = (...args: number[]) => void;
const debounce = (fn: F, t: number): F => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: number[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => fn(...args), t);
  };
};
