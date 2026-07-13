
const botao = document.getElementById("calcular");
if (botao) {
    botao.addEventListener("click", calcular);
}



function somar(numero1, numero2) {
    return numero1 + numero2;
}

function subtrair(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    if (numero2 === 0) {
        return "erro: Divisão por zero não é permitida.";
    }
    return numero1 / numero2;
}

function calcular() {
    const operacao = document.getElementById("operacao").value;
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado;

            switch (operacao) {
           case "somar":
                resultado = somar(numero1, numero2);
                break;
            case "subtrair":
                resultado = subtrair(numero1, numero2);
                break;
            case "multiplicar":
                resultado = multiplicar(numero1, numero2);
                break;
            case "dividir":
                resultado = dividir(numero1, numero2);
                break;
            default:
                alert("Operação inválida.");
                return;
        }
    
    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    console.log("Soma: " + somar(numero1, numero2));
    console.log("Subtração: " + subtrair(numero1, numero2));
    console.log("Multiplicação: " + multiplicar(numero1, numero2));
    console.log("Divisão: " + dividir(numero1, numero2));  

    const mensagem =
    resultado === "erro: Divisão por zero não é permitida." ? "Erro: Divisão por zero não é permitida." : `O resultado da operação ${operacao} entre ${numero1} e ${numero2} é: ${resultado}`;
        document.getElementById("resultado").innerText = `Resultado: ${resultado}\n\n${mensagem}`;
        document.getElementById("numero1").value = "";
        document.getElementById("numero2").value = "";
}