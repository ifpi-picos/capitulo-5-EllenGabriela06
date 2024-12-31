// Atividade 01: Verificar se um número é par ou ímpar
let numero = prompt("Digite um número:");

numero = parseInt(numero);

if (isNaN(numero)) {
  console.log("Por favor, insira um número válido.");
} else if (numero % 2 === 0) {
  console.log(`O número ${numero} é par.`);
} else {
  console.log(`O número ${numero} é ímpar.`);
}
