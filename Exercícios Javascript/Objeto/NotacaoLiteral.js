const a = 1 
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //possibila alterar o nome da constante 
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAtttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAtttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAtttr}
console.log(obj4)

//ECS 2015
const obj5 = {
    funcao1(){
//...
    }
}



