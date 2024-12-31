// Atividade 12: Calcular o fatorial de um número
let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

if (numero >= 0) {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log("O fatorial de " + numero + " é: " + fatorial);
} else {
    console.log("Por favor, digite um número não negativo.");
}
