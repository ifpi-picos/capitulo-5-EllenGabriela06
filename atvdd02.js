// Atividade 02: Encontrar o maior número entre três números distintos
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let num3 = parseInt(prompt("Digite o terceiro número:"));

if (num1 > num2 && num1 > num3) {
    console.log("O maior número é: " + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("O maior número é: " + num2);
} else {
    console.log("O maior número é: " + num3);
}
