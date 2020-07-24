let comparacomThis = function (param) {
    console.log(this === param)

}
comparacomThis(global)

let comparacomThisArrow = param => console.log(this === param)
comparacomThisArrow(global)
comparacomThisArrow(module.exports)



