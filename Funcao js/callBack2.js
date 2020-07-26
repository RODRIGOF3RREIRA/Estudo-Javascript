const notas = [7.2, 3.3, 9.9, 1.2, 5.5, 3.1 ]

//sem callback
const notasBaixas = []
for (let i in notas) {
    if (notas [i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback 
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

// callback + arrowfunction 
const notasBaixas3 = notas.filter(nota2 => nota2 < 7)
console.log(notasBaixas3)





