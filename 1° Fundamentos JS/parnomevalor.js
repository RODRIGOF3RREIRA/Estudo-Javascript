// par nome/valor
const saudacao = 'caraiooo' //contexto léxico

function exec(){
    const saudacao = 'oouinhao' // contexto lexico 2
    return saudacao
}
// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 33,
    peso:33,
    endereco: {
        logradouro: 'rua asd',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)