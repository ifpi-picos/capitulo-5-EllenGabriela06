// Atividade 07: Classificar o tipo de triângulo
let lado1 = parseFloat(prompt("Digite o valor do primeiro lado do triângulo:"));
let lado2 = parseFloat(prompt("Digite o valor do segundo lado do triângulo:"));
let lado3 = parseFloat(prompt("Digite o valor do terceiro lado do triângulo:"));

if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Os lados devem ser valores positivos.");
} else if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {

    if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo válido.");
}