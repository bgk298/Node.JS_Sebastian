function hello() {
    console.log('Hello, World!');
}
function sayHi(name) {
    console.log('Hi ' + name + '!');
}
function multiplyByTen(a) {
    return a * 10;
}
function sum(a, b) {
    return a + b;
}
function power(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};