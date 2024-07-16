/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/



class Carros{
    marca;
    modelo;
    cor;
    gastoMedioPorKmRodado;

    constructor(marca, modelo, cor, gastoMedioPorKmRodado) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.gastoMedioPorKmRodado = gastoMedioPorKmRodado;
    }
    
    valorPercurso(distanciaPercorrida, precoCombustivel) {
        return distanciaPercorrida * this.gastoMedioPorKmRodado * precoCombustivel;
    }
}

const distanciaPercorrida = 10;
const uno = new Carros('Volkwagen','Gol', 'Preto', 1 / 10);
console.log(`Valor gasto = R$ ` + uno.valorPercurso(distanciaPercorrida, 3.49).toFixed(2));

const palio = new Carros('Volkwagen','Gol', 'Preto', 1 / 12);
console.log(`Valor gasto = R$ ` + palio.valorPercurso(distanciaPercorrida, 3.49).toFixed(2));

