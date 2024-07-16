/* OBJETO LITERAL*/  
const pessoa = {
    nome: 'Lucas',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome}. Tenho ${this.idade} anos de idade`);
    }
};

/*ISSO */
console.log(pessoa['nome']);
/* E O MESMO DISSO */
console.log(pessoa.nome);

/*
pessoa.altura = 1.69;
pessoa.descrever();
*/
/*
pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();
*/