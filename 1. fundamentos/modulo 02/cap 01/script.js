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


const c = 10
c = 20

const d = []
console.log(d)

d.push(1)