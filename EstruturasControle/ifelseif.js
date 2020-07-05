Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirRsultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Muito Bem')
    } else if (nota.entre(7, 8)) {
        console.log('aprovado')
    } else if (nota.entre(5, 6)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 4)) {
        console.log('Reprovado')
    } else {
        console.log('Invalido')
    }
}
imprimirRsultado(9)
imprimirRsultado(7)
imprimirRsultado(5)
imprimirRsultado(2)
imprimirRsultado(22)
