
// Atividade 13: Jogo de Adivinhação
let numeroSecreto = Math.floor(Math.random() * 101);
let tentativas = 10;

console.log("Bem-vindo ao Jogo de Adivinhação!");
console.log("Tente adivinhar o número secreto entre 0 e 100.");
console.log("Você tem até 10 tentativas.");
for (let i = 1; i <= tentativas; i++) {
    let palpite = parseInt(prompt("Tentativa " + i + ": Digite seu palpite:"));

    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você acertou o número secreto: " + numeroSecreto);
        break; 
    } else if (palpite < numeroSecreto) {
        console.log("O número secreto é MAIOR que " + palpite + ".");
    } else if (palpite > numeroSecreto) {
        console.log("O número secreto é MENOR que " + palpite + ".");
    }

    if (i === tentativas) {
        console.log("Suas tentativas acabaram. O número secreto era: " + numeroSecreto);
    }
}
