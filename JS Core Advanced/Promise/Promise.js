function executeSequentially(operations) {
    return operations.reduce((promiseChain, currentOperation) => {
        return promiseChain.then(() => {
            return currentOperation();
        });
    }, Promise.resolve());
}