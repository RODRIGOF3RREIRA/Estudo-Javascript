const nome = 'pão'
const concatenacao = 'no ceu ' + nome + '!'
const template = `
ola
${nome}!`
console.log(concatenacao, template)

const up = texto => texto.toUpperCase()
console.log(`EI... ${up('cuidado')}!`)