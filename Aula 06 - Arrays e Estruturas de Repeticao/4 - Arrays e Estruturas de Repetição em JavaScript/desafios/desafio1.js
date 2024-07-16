// 1) Crie um programa que dado um número, imprima sua tabuada

const numero = 9;

console.log(`Tabuada do ${numero}`)

for (let i = 0; i <= 10; i++) {    
    console.log(`${numero} x ${i} = ` + numero * i);
}