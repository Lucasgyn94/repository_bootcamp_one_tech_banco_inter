class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}. Tenho ${this.idade} anos de idade. E nasci no ano de ${this.anoDeNascimento}!`);
    }
}

function compararIdade(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho do que ${p2.nome}!`)
    }
    else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho do que ${p1.nome}!`);
    }
    else {
        console.log(`${p1.nome} e ${p2.nome} são da mesma idade!`);
    }
}

const lucas = new Pessoa('Lucas',30,1994);
const renan = new Pessoa('Renan',28,1992);

lucas.descrever();
renan.descrever();
compararIdade(lucas,renan);