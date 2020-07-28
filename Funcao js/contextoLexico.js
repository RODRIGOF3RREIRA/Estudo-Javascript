const valor = 'Global'

function func() {
    console.log(valor)
}

function exec(){
    const valor = 'local'
    func()
}

exec()