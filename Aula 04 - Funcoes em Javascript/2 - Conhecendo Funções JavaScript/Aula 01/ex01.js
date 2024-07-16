/*2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde
para dar uma indicação a condição de peso de uma pessoa adulta.

Formúla do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição
de acordo com a tabela

IMC em adultos Condição:
    - Abaixo de 18.5: Abaixo do peso
    - Entre 18.5 e 25: Peso normal
    - Entre 25 e 30: Acima do peso
    - Entre 30 e 40: Obeso
    - Acima de 40: Obesidade grave */


/* 
MINHAS ANOTAÇÕES
* funções são pequenos blocos de códigos
* no javascript funções são como objetos, conseguimos manipular seus valores

*/
function calculaPeso(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return `IMC = ${imc.toFixed(2)}. Você está abaixo do peso!`;
    }
    else if (imc >= 18.5 && imc <= 25) {
        return `IMC = ${imc.toFixed(2)}. Você está dentro do peso!`;
    }
    else if (imc >= 25 && imc <= 30) {
        return `IMC = ${imc.toFixed(2)}. Você está acima do peso!`;
    }
    else if (imc >= 30 && imc <= 40) {
        return `IMC = ${imc.toFixed(2)}. Você está obeso!`;
    }
    else if (imc >= 40) {
        return `IMC = ${imc.toFixed(2)}. Você está com obesidade grave!`;
    }
}

/*
EXEMPLO DE MAIN ANONIMO AUTO INVOCAVEL
*/
(function () {
    const peso = 78;
    const altura = 1.78;

    const imc = calculaPeso(peso,altura);
    console.log(classificarImc(imc));
})();

/* 
function main() {
    const peso = 78;
    const altura = 1.78;

    const imc = calculaPeso(peso,altura);
    console.log(classificarImc(imc));
}

main();
*/
/*
main = function() {
    console.log(1);
}

main();
*/
/** */

/*
function teste() {
    console.log('teste');
}

teste();
*/
/*
function quadrado (valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
*/
/*
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));
*/