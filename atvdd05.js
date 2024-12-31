// Atividade 05: Converter temperatura entre Celsius e Fahrenheit
let escolha = prompt("Escolha a conversão: \n1. Celsius para Fahrenheit \n2. Fahrenheit para Celsius");

if (escolha === "1") {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(celsius + "°C é igual a " + fahrenheit.toFixed(2) + "°F.");
} else if (escolha === "2") {
    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(fahrenheit + "°F é igual a " + celsius.toFixed(2) + "°C.");
} else {
    console.log("Opção inválida! Escolha 1 para Celsius para Fahrenheit ou 2 para Fahrenheit para Celsius.");
}