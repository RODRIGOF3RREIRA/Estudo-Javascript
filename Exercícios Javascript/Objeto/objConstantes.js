// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)