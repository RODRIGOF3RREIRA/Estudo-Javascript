const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13 
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable:true,
    writable:false,
    value: '01/01/2019'     
})
pessoa.dataNascimento = '01/01/2018'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))