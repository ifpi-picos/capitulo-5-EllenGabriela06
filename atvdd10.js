// Atividade 10: Exibir números pares até um número informado
let numero = parseInt(prompt("Digite um número positivo:"));

if (numero > 0) {
    let i = 0;

    while (i <= numero) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
} else {
    console.log("Por favor, digite um número positivo.");
}