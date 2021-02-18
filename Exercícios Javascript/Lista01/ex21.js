/**
 * Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */

function planoSaude(idade) {
    total = 100
    adicional = 0
    if (idade <= 10) {
        adicional = 80
    } else if (idade >= 11 && idade <= 30) {
        adicional = 50
    } else if (idade >= 31 && idade <= 60) {
        adicional = 95
    } else if (idade >= 61) {
        adicional = 130
    } else {
        return "erro"
    }
    total = total + adicional

        console.log(`PlANO DE SAUDE | VALOR do PLANO 100R$ | IDADE DO PACIENTE ${idade}, ADCIONAL A SER PAGO ${adicional} | TOTAL ${total}R$`)
}


console.log(planoSaude(20))
console.log(planoSaude(90))
console.log(planoSaude('e'))