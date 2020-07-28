function criarproduto (nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.5
    }
}

console.log(criarproduto('deca', 120.32))
console.log(criarproduto('trembo', 220.50))
console.log(criarproduto('dura', 50.00))


