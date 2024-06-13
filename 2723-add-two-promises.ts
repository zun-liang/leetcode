type P = Promise<number>;

const addTwoPromises = async (promise1: P, promise2: P): P => {
  const newPromise = await Promise.all([promise1, promise2]);
  const output = newPromise[0] + newPromise[1];
  return Promise.resolve(output);
};

