function sum(a, b){
    return a + a
}

console.log(sum(1, 2))

function compareNumbers(a, b){
    return a > b ? 1 : a < b ? -1 : 0
}

console.log(compareNumbers(1, 1));
console.log(compareNumbers(1, 2));
console.log(compareNumbers(2, 1));

function SuperSum(from, upTo){
    var sum = 0

    for (var i = from; i <= upTo; i++){
    }
    return sum
}

console.log(SuperSum(1, 10))
console.log(SuperSum(9, 100))
console.log(SuperSum(200, 1000))
