const {validator_cpf_cnpj} = require('./class')

//Variaveis para testar
const cnpj_sem_mascara = '15.001.673/0001-33'
const cnpj_com_mascara = '85824975000197'
const cpf_sem_mascara = '158.791.490-56'
const cpf_com_mascara = '30868394068'
const cnpjErrado = '11.222.333/0001-35'
const cpfErrado  = '275.060.554-13'

console.log(`O CNPJ "${cnpj_sem_mascara}" SEM máscara é valido: ${new validator_cpf_cnpj(cnpj_sem_mascara).validarDocumento()}`)
console.log(`O CNPJ "${cnpj_com_mascara}" COM máscara é valido: ${new validator_cpf_cnpj(cnpj_com_mascara).validarDocumento()}`)
console.log(`O CPF "${cpf_sem_mascara}" SEM máscara é valido: ${new validator_cpf_cnpj(cpf_sem_mascara).validarDocumento()}`)
console.log(`O CPF "${cpf_com_mascara}" COM máscara é valido: ${new validator_cpf_cnpj(cpf_com_mascara).validarDocumento()}`)
console.log(`O CNPJ "${cnpjErrado}" é válido: ${new validator_cpf_cnpj(cnpjErrado).validarDocumento()}`)
console.log(`O CPF "${cpfErrado}" é valido : ${new validator_cpf_cnpj(cpfErrado).validarDocumento()}`)