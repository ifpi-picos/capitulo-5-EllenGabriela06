// Atividade 03: Calcular média e verificar aprovação
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("A média do aluno é: " + media.toFixed(2) + ". O aluno foi aprovado.");
} else {
    console.log("A média do aluno é: " + media.toFixed(2) + ". O aluno foi reprovado.");
}
