const min = 1;
const max = 100;

const isEven = function(num) {
    if(typeof num === 'number') {
        return num % 2 === 0 ? true : false;
    }
    return null
}

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);
const sum = getSum(a, b, c);
const even = isEven(sum);

console.log(a, b, c);


showInfo(sum, even);


function getSum(number1, number2, number3) {
    if(number1>number3 && number2>number3) {
        return number1 + number2
    }
    if(number1>number2 && number3>number2) {
        return number1 + number3
    }
    if(number2>number1 && number3>number1) {
        return number3 + number2
    }
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