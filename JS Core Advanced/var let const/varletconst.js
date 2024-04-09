function testvar() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // Выводит 20
    }
    console.log(x); // Выводит 20
}

function testlet() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x); // Выводит 20
    }
    console.log(x); // Выводит 10
}
function testconst() {
    const x = 10;

    if (true) {
        const x = 20;
        console.log(x); // Выводит 20
    }

    console.log(x); // Выводит 10
}
