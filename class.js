"use-strict";
/*
    Aplicação voltada para validar CPF e CNPJ
 */
class validator_cpf_cnpj{
    constructor(documento) {
        this.documento = documento
    }

    validarDocumento(){
        const regex = /\D+/g
        const NovoDocumento = this.documento.replace(regex, '')
        const verifica = !!NovoDocumento
        if(verifica){
            if(new Set(NovoDocumento).size === 1) return false
            if(NovoDocumento.length === 11){
                return this.validandoCPF(NovoDocumento)
            }else if(NovoDocumento.length === 14){
                return this.validandoCNPJ(NovoDocumento)
            }
        }else{
            return false
        }
    }

    validandoCPF(cpf){
        let valores = {
            peso1: 10,
            peso2: 11,
            primeirasoma: 0,
            segundasoma: 0,
            primeirodigito: 0,
            segundodigito: 0
        }
        for (let numero in cpf.slice(0, 9)){
            valores.primeirasoma += cpf[numero] * valores.peso1
            valores.peso1--
        }
        if(valores.primeirasoma === 10) valores.primeirasoma = 10
        if(!((valores.primeirasoma * 10) % 11 === parseInt(cpf.slice(9,10)))) return false
        for (let numero in cpf.slice(0,10)){
            valores.segundasoma += cpf[numero] * valores.peso2
            valores.peso2--
        }
        if(valores.segundasoma === 10) valores.segundasoma = 0
        return (valores.segundasoma * 10) % 11 === parseInt(cpf.slice(10,11))
    }

    validandoCNPJ(cnpj){
        let calculos = {
            peso1: 5,
            peso2: 9,
            primeirosoma: 0,
            segundosoma: 0,
            digitoum: 0,
            digitodois: 0
        }
        for(let numero in cnpj.slice(0,12)){
            if(calculos.peso1 >= 2){
                calculos.primeirosoma += cnpj[numero] * calculos.peso1
                calculos.peso1--
            }else{
                calculos.primeirosoma += cnpj[numero] * calculos.peso2
                calculos.peso2--
            }
        }
        if(calculos.primeirosoma % 11 < 2) calculos.digitoum = 0
        else calculos.digitoum = 11 - calculos.primeirosoma % 11

        if(calculos.digitoum !== parseInt(cnpj.slice(12,13))) return false

        calculos.peso1 = 6;calculos.peso2 = 9;

        for(let numero in cnpj.slice(0,13)){
            if(calculos.peso1 >= 2){
                calculos.segundosoma += cnpj[numero] * calculos.peso1
                calculos.peso1--
            }else{
                calculos.segundosoma += cnpj[numero] * calculos.peso2
                calculos.peso2--
            }
        }

        if(calculos.segundosoma % 11 < 2) calculos.digitodois = 0
        else calculos.digitodois = 11 - calculos.segundosoma % 11

        return calculos.digitodois === parseInt(cnpj.slice(13, 14));
    }
}

module.exports = {
    validator_cpf_cnpj
}