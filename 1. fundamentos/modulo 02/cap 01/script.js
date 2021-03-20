'use stric'; 

function withVar() {
    for (var i = 0; i < 10; i++) {
        console.log('var' + i)
    }
    i = 20;
    console.log(i)
}

withVar()