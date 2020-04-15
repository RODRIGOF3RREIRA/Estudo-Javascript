//função sem retorno 
function imprimirSoma(a, b){

console.log(a+b)
}

imprimirSoma(2.5, 43.6)

//função com retorno

function Soma(a, b = 1){
    return a + b
}

console.log(Soma(2, 3))
console.log(Soma(2))