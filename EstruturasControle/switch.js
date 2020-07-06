const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Muito Bem')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
            console.log('Reprovado')
            break
        default:
            console.log('Erro...')
    }
}

imprimirResultado(5)
imprimirResultado(10)
imprimirResultado(7)
