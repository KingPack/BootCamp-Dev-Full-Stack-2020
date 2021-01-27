let a = 5
let b = 6

if (a > b) {
    console.log(a + ' é maior que ' + b)

} else { 
    if ( a < b){
    console.log(a + ' é menor que ' + b)

} else {
    console.log(a + ' é igual a ' + b)
    }
} 

let dia = 8

if (dia === 1) {
    console.log('Domiingo')
}
else {
    if (dia === 2){
        console.log('segunda')
}
else {
    if (dia === 3) {
            console.log('terça')
}   
else {
    if (dia === 4) {
        console.log('quarta')
    }
else {
    if (dia === 5) {
        console.log('quinta')
    }
else {
    if (dia === 6) {
        console.log('sexta')
    }   
else {
    if (dia === 7) {
        console.log('sabado')
    }
else {
    {
    console.log('dia não existente')
    }
     }
      }
       }
        }
         }
          }
           }
            
var r = 2
// prettier-ignore
switch(dia){
    case 1: r = 'Domingo' ; 
    break
    case 2: r = 'Segunda' 
    break
    case 3: r = 'Terça'
    break
    case 4: r = 'Quarta'
    break
    case 5: r = 'Quinta'
    break
    case 6: r = "Sexta"
    break
    case 7: r = 'Sabado'
    break
    
    default: r = 'Dia Inexistente'
}

console.log(r)

// Operador Ternario

a = 6
b = 7

if (a > b) {
    console.log(a + ' é maior que ' + b)

} else { 
    if ( a < b){
    console.log(a + ' é menor que ' + b)

} else {
    console.log(a + ' é igual a ' + b)
    }
}
var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual'
console.log(resposta)


// somatorio com while

let numeroAtual = 1 
let somatorio = 0

while (numeroAtual <= 10) {
    //somatorio += numeroAtual
    somatorio += numeroAtual
    numeroAtual++
}

console.log('A soma é ' + somatorio)

do {
    somatorio += numeroAtual
    numeroAtual++
} while (numeroAtual <= 10)

console.log('A soma é ' + somatorio)

somatorio = 0

for(numeroAtual = 1; numeroAtual <=10; numeroAtual++){
    somatorio += numeroAtual
}

console.log('A soma é ' + somatorio)