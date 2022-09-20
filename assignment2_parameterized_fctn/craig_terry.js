// Craig Byakola
// Kayondo Terry

function subtract(a, b) {
    return a - b;
}

function addSubtract(a, b) {
    return a + b + subtract(a, b);
}

function multiplyAddSubtract(a, b) {
    return a * b * addSubtract(a, b);
}

console.log(multiplyAddSubtract(8, 3));
console.log(multiplyAddSubtract(3, 8));

console.log(multiplyAddSubtract(2, 5));
console.log(multiplyAddSubtract(5, 2));
