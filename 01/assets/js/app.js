const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a, typeof b)

const sum = parseFloat(a) + parseFloat(b);
const substr = a - b;
const multipl = a * b;
const divide = a/b;

console.log(sum, substr, multipl, divide);

const arr = [sum, substr, multipl, divide];
arr.forEach(function(number) {
    if(number > 20) {
        return console.log(number + ' jest większy od 20')
    }
    return console.log(number + ' jest mniejszy lub równy 20')
})