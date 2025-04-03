// Função para calcular e atualizar o resultado
document.getElementById("botao").addEventListener("click", (event) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Pegando os valores dos inputs
    let v1 = parseFloat(document.getElementById("investimento").value);
    let v2 = parseFloat(document.getElementById("lucro").value);

    // Verificando se os valores são válidos
    if (v1 < v2){
        document.getElementsByClassName("res")[0].style.visibility = "visible";

        document.getElementsByClassName("res")[0].innerText = "Não existe nenhum investimento aonde o lucro seja maior do que o investido"
    } else {
        if (isNaN(v1) || isNaN(v2)) {
            document.getElementsByClassName("res")[0].style.visibility = "visible";
    
            document.getElementsByClassName("res")[0].innerText = "Por favor, insira valores válidos!";
        } 
        else {
            // Calculando o lucro total e mostrando o resultado
            document.getElementsByClassName("tabela-investimentos")[0].style.visibility = "visible";
            document.getElementsByClassName("res")[0].style.visibility = "visible";
    
            let resultado = v1 + v2;
            document.getElementsByClassName("res")[0].innerText = "Encontramos diversos títulos em nossa plataforma que retornam esse lucro, observe abaixo.";
            for (let i = 0; i < 5; i++) {
                // Atualizando os valores na tabela
                let valorInvestimento = (Math.random() * (resultado - v1) + v1).toFixed(2);
                let lucroEsperado = (Math.random() * (v2)).toFixed(2);
                document.getElementsByClassName("valor-investimento")[i].innerText = "R$ " + v1;
                document.getElementsByClassName("lucro-esperado")[i].innerText = "R$ " + v2;
            }
        }}
});

// Função para monitorar os inputs e fazer a verificação
function verificarValores() {
    let investimento = parseFloat(document.getElementById("investimento").value);
    let lucro = parseFloat(document.getElementById("lucro").value);

    // Verifica se o lucro é maior que o investimento
    if (lucro > investimento) {
        // Aplica borda vermelha nos campos de input
        document.getElementById("investimento").classList.add("erro");
        document.getElementById("lucro").classList.add("erro");
        // Exibe a mensagem de erro
        document.getElementsByClassName("tabela-investimentos")[0].style.visibility = "hidden";
        document.getElementsByClassName("res")[0].style.visibility = "visible";

        document.getElementsByClassName("res")[0].innerText = "Não encontramos nenhum investimento com esse rendimento. O valor de lucro não pode ser maior que o do investimento.";
    } else {
        // Remove borda vermelha e limpa a mensagem de erro se a verificação passar
        document.getElementsByClassName("res")[0].style.visibility = "hidden";
        document.getElementById("investimento").classList.remove("erro");
        document.getElementById("lucro").classList.remove("erro");
        document.getElementsByClassName("res")[0].innerText = "";
    }
}

// Adiciona a função aos inputs
document.getElementById("investimento").addEventListener("input", verificarValores);
document.getElementById("lucro").addEventListener("input", verificarValores);