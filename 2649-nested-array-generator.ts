type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
    for (const num of arr) {
        if (Array.isArray(num)) {
            yield* inorderTraversal(num);
        } else {
            yield num;
        }
    }
};
