'use strict'; 

function withVar() {
    for (var i = 0; i < 10; i++) {
        console.log('var' + i)
    }
    i = 20;
    console.log(i)
}


function withLet() {
    for (let i = 0; i < 10; i++) {
        console.log('let' + i)
    }
   // i = 20;
    //console.log(i)
}

withVar()
withLet()


//const c = 10
//c = 20

//const d = []
//console.log(d)

//d.push(1)

function sum (a, b) {
    return a + b 
}

const sum2 = function(a, b) {
    return a + b
}

const sum3 = (a, b) => {
    return a + b
}

const sum4 = (a, b) => a + b

console.log(sum(2,3))
console.log(sum2(2,3))
console.log(sum3(2,3))
console.log(sum4(2,3))


// template literals

const nome = 'Lucas'
const surName = 'Hendrek'
const text1 = 'Meu nome e '+ nome + ' ' + surName
const text2 = `Meu nome e ${nome} ${surName}`


console.log(text1)
console.log(text2)


const sum5 = (a, b) => a + b
console.log(sum5(2))