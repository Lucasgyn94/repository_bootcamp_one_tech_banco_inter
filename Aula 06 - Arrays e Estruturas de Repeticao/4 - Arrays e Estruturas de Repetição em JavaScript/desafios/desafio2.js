// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima
// cada número par encontrado

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

for (let i = 0; i < numeros.length; i++) {
    numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(`${numero}`);
    }
}