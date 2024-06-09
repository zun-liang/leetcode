const finalValueAfterOperations = (operations: string[]): number => {
    let sum = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].indexOf("--") >= 0) {
            sum -= 1;
        } else if (operations[i].indexOf("++") >= 0) {
            sum += 1;
        }
    }
    return sum;
};