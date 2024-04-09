function validateInteger(number) {
    if (Number.isInteger(number)) {
        return true;
    } else {
        throw new Error("Number must be an integer.");
    }
}try {
    validateInteger(10); // Проверка целого числа
    console.log("Number is valid.");

    validateInteger(10.5); // Проверка нецелого числа
    console.log("Number is valid.");
} catch (error) {
    console.log(error.message); // Вывод ошибки
}