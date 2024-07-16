/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM de viagem.

Imprime no console o valor que sera gasto para realizar esta viagem */

preco_combustivel = 3.49;
km_por_litro = 7
distancia_percorrida = 14;

litros_consumidos = distancia_percorrida / km_por_litro;
valor_gasto = litros_consumidos * preco_combustivel;

console.log(`Litros consumidos = ${litros_consumidos}`);
console.log(`Valor gasto = R$ ${valor_gasto.toFixed(2)} Reais`)