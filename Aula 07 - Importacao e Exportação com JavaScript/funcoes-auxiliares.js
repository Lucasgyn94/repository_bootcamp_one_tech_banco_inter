const entradas = [5, 50, 10, 98, 23];
let i = 0;


function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}
/*
function gets(nome) {
    return nome;
}
*/

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };

// module.exports.gets = gets;

// exportação do nosso objeto

/*
module.exports = { 
    gets: gets, 
    print: print
};
*/