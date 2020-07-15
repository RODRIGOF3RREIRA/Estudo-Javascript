const pessoa = {
    saudacao: 'Bomdia',
    falar(){
        console.log(this.saudacao)
    }

}

const falarDepessoa = pessoa.falar.bind(pessoa)
falarDepessoa()
