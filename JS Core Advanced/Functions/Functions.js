function reOperation(operation, interval, repetitions) {
    let counter = 0;
    const intervalId = setInterval(() => {
        operation();
        counter++;

        if (counter === repetitions) {
            clearInterval(intervalId);
        }
    }, interval);
}