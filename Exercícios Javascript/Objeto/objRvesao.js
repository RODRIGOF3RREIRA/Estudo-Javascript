// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)

delete produto.preco
delete produto ['marca do produto']
console.log(produto)

const carro = { 
    modelo: 'A4',
    valor: 89444,
    proprietario: {
        nome:'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero:123
        }
    },
    condutores: [{
        nome:'Junior',
        idade:10
    }, {
        nome:'ana',
        idade:22
    }],
    calcularValorSeguro: function() {
        
    }
}
