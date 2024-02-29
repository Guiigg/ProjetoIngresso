let quantidade = document.getElementById('qtd')

function comprar() {
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value
    let pista = document.getElementById('qtd-pista')
    let superior = document.getElementById('qtd-superior')
    let inferior = document.getElementById('qtd-inferior')
    // Resgatar elementos

    if (quantidade.value == '') {
        alert('Informe uma quantidade válida!')
        return;
        // Verificar se quantidade é null e em caso positivo parar de rodar o código e pedir para o usuário inserir um valor válido
    }
    else if (quantidade.value == 0) {
        alert('Adicione pelo menos uma quantidade!')
        return;
        // Verificar se quantidade é 0 e em caso positivo parar de rodar o código e pedir para o usuário inserir um valor válido
    }

    if (tipoDeIngresso == 'pista') {
        qntdDisponivelValores(pista, tipoDeIngresso)
        // Se o tipo de ingresso for "pista", descontar do tipo pista a quantidade de ingressos pedida pelo usuário
    }
    else if (tipoDeIngresso == 'superior') {
        qntdDisponivelValores(superior, tipoDeIngresso)
        // Se o tipo de ingresso for "superior", descontar do tipo pista a quantidade de ingressos pedida pelo usuário
    }
    else {
        qntdDisponivelValores(inferior, tipoDeIngresso)
        // Se o tipo de ingresso for "inferior", descontar do tipo pista a quantidade de ingressos pedida pelo usuário
    }
}

function qntdDisponivelValores(tipoIngressoQuantidade, tipoIngresso) {
    let quantidadeValor = parseInt(quantidade.value) // Resgatar valor de quantidade e transforma-lo em número
    let ingressoQuantidade = parseInt(tipoIngressoQuantidade.textContent) // Tranformar o conteúdo da qntd do tipo de ingresso em número

    if (quantidadeValor > ingressoQuantidade) {
        alert(`Quantidade indisponível do tipo ${tipoIngresso} para compra!`)
        return;
        // Se a quantidade pedida pelo user for maior que a quantidade disponível, exibir uma mensagem infromando que não há tal qntd
    }
    else {
        alert('Compra realizada com sucesso!')
        // Caso contrário, informar que a compra foi bem sucedida
    }

    let ingressoNovaQuantidade = ingressoQuantidade - quantidadeValor // Diminuir a qtd atual pela a qtd exigida para criar uma nova qtd
    tipoIngressoQuantidade.textContent = ingressoNovaQuantidade // Inserir a nova qtd no tipo de ingresso referente
}
