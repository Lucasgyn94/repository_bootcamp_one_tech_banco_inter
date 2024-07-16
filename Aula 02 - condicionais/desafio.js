/*Faça um programa para calcular o valor de uma viagem.

Você tera 5 variáveis. Sendo elas:
    1 - Preço do etanol
    2 - Preço da gasolina
    3 - O tipo de combustível que está no seu carro
    4 - Gasto médio de combustível do carro por KM
    5 - Distância em KM da viagem */

    const precoEtanol = 3.49;
    const precoGasolina = 5.79;
    const tipoCombustivel = 'gasolina';
    const kmPorLitroAlcool = 8;
    const kmPorLitroGasolina = 12;
    const distanciaPercorrida = 16;


    if (tipoCombustivel === 'etanol') {
        const litrosConsumidos = distanciaPercorrida / kmPorLitroAlcool
        const valorGasto = litrosConsumidos * precoEtanol;
        console.log(`Litros consumidos = ${litrosConsumidos.toFixed(2)}`)
        console.log(`Valor gasto na viagem = ${valorGasto.toFixed(2)}`)
    }
    else if (tipoCombustivel === 'gasolina') {
        const litrosConsumidos = distanciaPercorrida / kmPorLitroGasolina
        const valorGasto = litrosConsumidos * precoGasolina;
        console.log(`Litros consumidos = ${litrosConsumidos.toFixed(2)}`)
        console.log(`Valor gasto na viagem = ${valorGasto.toFixed(2)}`)
    }