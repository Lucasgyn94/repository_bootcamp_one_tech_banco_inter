function escreverNome(nome) {
    return `Meu nome é ${nome}!`;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreverNome('Lucas') + '\n' + `Você tem ${idade} anos. Maior de idade!`);
    }
    else {
        console.log(escreverNome('Lucas') + '\n' + `Você tem ${idade} anos. Menor de idade!`);
    }
}

verificarIdade(5);