function isEquivalent(obj1, obj2) {
    // Проверка на равенство типов объектов
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        return false;
    }

    // Получение ключей свойств объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Проверка на равное количество свойств
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Рекурсивное сравнение значений свойств
    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }

        const value1 = obj1[key];
        const value2 = obj2[key];

        if (typeof value1 === "object" && typeof value2 === "object") {
            if (!isEquivalent(value1, value2)) {
                return false;
            }
        } else if (value1 !== value2) {
            return false;
        }
    }

    return true;
}