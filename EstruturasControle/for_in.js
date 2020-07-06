const notas = [5.7, 3.5, 7.8, 2.2]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'jao',
    idade: 33,
    peso: 40
}
for ( let i in pessoa){
    console.log(`${i} = ${pessoa [i]}`)
}
