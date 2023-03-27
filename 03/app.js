const min = 1;
const max = 100;

const isEven = function(num) {
    if(typeof num !== 'number') {
        return null
    }
    return num % 2 === 0;
}

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);
const sum = getSum(a, b, c);
const even = isEven(sum);

console.log(a, b, c);


showInfo(sum, even);


function getSum(number1, number2, number3) {
    const x = parseInt(number1);
    const y = parseInt(number2);
    const z = parseInt(number3);
    
    const arr = [x, y, z];
    arr.sort(function(a, b) {
        return b - a;
    })

    return arr[0] + arr[1];

}

function showInfo(num, arg) {
    let info
    switch(arg) {
        case null:
            info = `podany argument ${num} nie jest liczbą`;
            break;
        case true:
            info =  `podany argument ${num} jest parzysty`;
            break;
        case false:
            info =  `podany argument ${num} jest nieparzysty`;
            break;
    }
    return console.log(info)
}


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}