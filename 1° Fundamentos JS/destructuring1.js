const conta = {
    numero: 344534,
    ag: 121212,
    cliente: 'Naruto',
    endereco: {
        rua: 'rua tal',
        casa: 222
    }

}

const { numero, ag} = conta
console.log(numero, ag)

const {cliente: clt} = conta
console.log(clt)

const { endereco: { rua, casa}} = conta
console.log(rua, casa)
