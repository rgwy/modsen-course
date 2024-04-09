function factorial(n) {
    'use strict';

    if (n === 0 || n === 1) {
        return 1;
    } else if (n < 0) {
        throw new Error('Факториал отрицательного числа не определен');
    } else {
        return n * factorial(n - 1);
    }
}

