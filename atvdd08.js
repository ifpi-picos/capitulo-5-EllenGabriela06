// Atividade 08: Simulação de restaurante com menu
let prato = prompt("Escolha um prato do menu:\n1. Pizza\n2. Hamburguer\n3. Salada\n4. Macarrao\n");

switch (prato.toLowerCase()) {
    case "pizza":
        console.log("Você escolheu Pizza.\nDescrição: Pizza com molho de tomate, queijo e ingredientes a gosto.\nPreço: R$ 35,00");
        break;
    case "hamburguer":
        console.log("Você escolheu Hambúrguer.\nDescrição: Hambúrguer com carne suculenta, queijo, alface, tomate e molho especial.\nPreço: R$ 20,00");
        break;
    case "salada":
        console.log("Você escolheu Salada.\nDescrição: Mix de folhas verdes com legumes frescos e molho de sua escolha.\nPreço: R$ 15,00");
        break;
    case "macarrao":
        console.log("Você escolheu Macarrão.\nDescrição: Macarrão com molho de tomate e carne moída.\nPreço: R$ 25,00");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha um prato do menu.");
}
