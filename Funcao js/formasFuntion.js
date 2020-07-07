//Criar de forma literal
function fun1(){ }

//armazenar em uma variável
const fun2 = function () { }

// Armazenat em um array
const array = [function (a ,b) { return a + b }, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = { }
obj.falar = function() { return 'ola'} 
console.log(obj.falar())

//passar função como param
function run(fun){

}
run( function () { console.log('Executando')})
