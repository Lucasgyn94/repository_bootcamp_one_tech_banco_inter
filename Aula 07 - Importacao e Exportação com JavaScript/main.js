// const funcoes = require('./funcoes-auxiliares');
const { gets, print } = require('./funcoes-auxiliares');

// jogando a quantidade de entradas em uma lista
const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}
print(`Maior valor do array = ${maiorValor}`);


/*
print(gets());
print(gets());
print(gets());
print(gets());
print(gets());
*/


/*
console.log(funcoes.gets('lucas'));
*/
/*
const pessoa = {
    nome: 'lucas'
};
*/
//const {nome} = pessoa; 
// essa expressão acima e o mesmo que
//const nome = pessoa.nome;