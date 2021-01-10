/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function conta(dividendo, divisor) {

    resultado = dividendo / divisor;
    console.log(`Resto: ${dividendo % divisor}`)
    return resultado;
};
console.log(conta(10, 3))

