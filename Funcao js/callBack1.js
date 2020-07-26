const montadoras = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

montadoras.forEach(imprimir)
montadoras.forEach(montadoras => console.log(montadoras))       // arrow function 
