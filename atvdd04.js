// Atividade 04: Verificar maioridade
let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
let anoAtual = new Date().getFullYear();

let idade = anoAtual - anoNascimento;

if (idade >= 18) {
    console.log("A pessoa tem " + idade + " anos e já é maior de idade.");
} else {
    console.log("A pessoa tem " + idade + " anos e ainda não é maior de idade.");
}
