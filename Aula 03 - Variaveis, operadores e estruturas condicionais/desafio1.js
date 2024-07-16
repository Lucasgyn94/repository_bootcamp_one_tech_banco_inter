/*1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre
calcule e imprima sua média e sua classificação confome a tabela abaixo

Média = (nota1 + nota2 + nota3) / 3

classificação
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
 */

const nota1 = 10;
const nota2 = 10;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3

if (media < 5) {
    console.log(`Média = ${media}. Aluno reprovado!`)
}
else if (media >= 5 && media <= 7) {
    console.log(`Média = ${media}. Aluno de recuperação!`)
}
else if (media >= 7) {
    console.log(`Média = ${media}. Aluno aprovado!`)
}