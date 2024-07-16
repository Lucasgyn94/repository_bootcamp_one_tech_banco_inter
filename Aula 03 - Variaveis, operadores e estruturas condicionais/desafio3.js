/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os código da tabela a seguir para ler qual a condição de pagamento escolhida
e efetuar o calcúlo adequado

Código Condição de pagamento:
    1 - A vista Débito, recebe 10% desconto;
    2 - A vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10% */

const produtoValorEtiqueta = 100;
const formaDePagamento = 2;

if (formaDePagamento === 1) {
    console.log(`Você escolheu pagar a vista no débito e ganhará um desconto de 10%.`)
    console.log(`Valor final = R$ ${produtoValorEtiqueta - produtoValorEtiqueta * 0.1}`)
}
else if (formaDePagamento === 2) {
    console.log(`Você escolheu pagar a vista no dinheiro/PIX e ganhará um desconto de 15%.`)
    console.log(`Valor final = R$ ${produtoValorEtiqueta - produtoValorEtiqueta * 0.15}`)
}
else if (formaDePagamento === 3) {
    console.log(`Você escolheu pagar em duas vezes.`)
    console.log(`Valor final = R$ ${produtoValorEtiqueta}`)
}
else if (formaDePagamento === 4) {
    console.log(`Você escolheu pagar em mais de duas vezes.`)
    console.log(`Valor final = R$ ${produtoValorEtiqueta + produtoValorEtiqueta * 0.10}`)
}

