const arr = createArray(10, 200);
const largest = getLargest([...arr]);
const avg = getAvg(largest);

console.log(arr);
console.log(largest);
console.log(avg);


function createArray(min, max) {
    const array = [];
    for(let i=0; i<20; i++) {
        const randomNumber = Math.round((Math.random() * (max-min)) + min);
        array.push(randomNumber);
    }
    return array;
}

function getLargest(array) {
    array.sort(function(a, b) {
        return b - a;
    })
    return array.slice(0, 10)
}

function getAvg(array) {
    const arraySum = array.reduce(function(sum, num) {
        return sum + num
    });
    return arraySum / array.length
}