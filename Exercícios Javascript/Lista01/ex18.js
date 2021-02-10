/**
 *  Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’

 */

function escrevaNum(num) {
    switch (num) {
        case 0:
            return 'Zero'
        case 1:
            return  'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Tres' 
        default:
            return 'Erro'
    }

}

console.log(escrevaNum(0))
console.log(escrevaNum(1))
console.log(escrevaNum(2))
console.log(escrevaNum(3))
