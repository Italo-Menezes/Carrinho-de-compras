let carrinhoDeCompras = []
    // Pega a lista que vai receber os produtos
    let lista = document.getElementById('lista-produtos');
    
    // Atualiza apenas o <span> do total
    valorTotal = document.getElementById('valor-total');
    

function adicionar() {
     // Limpa os produtos anteriores
    lista.innerHTML = '';
    //pega o produto selecionado
    let produtosSelecionados = document.getElementById(`produto`);
    let produto = produtosSelecionados.value 

    let valor = produto.split('-')[1].trim();
    let nome = produto.split('-')[0].trim();
   
    //pega a quantidade digitada
    let quantidadeDesejada = document.getElementById(`quantidade`);
    let quantidade = parseInt(quantidadeDesejada.value);
     
    // Verifica se a quantidade é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert(`digite uma quantidade valida`)
        return;
    }

    carrinhoDeCompras.push({
        name:nome,
        money:valor,
        qntd: quantidade
    });

  adicionarAocarinho();
}

function adicionarAocarinho() {
     // Pega a lista que vai receber os produtos
    lista = document.getElementById('lista-produtos');
    
    // Limpa os produtos anteriores
    lista.innerHTML = '';

    
    let total = 0; // variavel para calcular o total

     // Adiciona cada produto do carrinho
    carrinhoDeCompras.forEach(item => {
        // Cria a section do produto
        let produtoSection = document.createElement('section');
        produtoSection.className = 'carrinho__produtos__produto';

        // Span da quantidade
        let spanQntd = document.createElement('span');
        spanQntd.className = 'texto-azul';
        spanQntd.innerText = `${item.qntd}x`;

        // Nome do produto (texto simples)
        let nomeProduto = document.createTextNode(` ${item.name} `);

        // Span do valor
        let spanValor = document.createElement('span');
        spanValor.className = 'texto-azul';
        let valorNumerico = parseInt(item.money.replace('R$', ''));
        let subtotal = valorNumerico * item.qntd;
        spanValor.innerText = `R$${subtotal}`;

        // Atualiza o total
        total += subtotal;
        

         // Adiciona os elementos na section
        produtoSection.appendChild(spanQntd);
        produtoSection.appendChild(nomeProduto);
        produtoSection.appendChild(spanValor);

            // Adiciona a section na lista
        lista.appendChild(produtoSection);
    });

  // Atualiza apenas o <span> do total
    valorTotal = document.getElementById('valor-total');
    valorTotal.innerText = `R$${total}`;
}

function limpar() {
       // Pega a lista que vai receber os produtos
    let lista = document.getElementById('lista-produtos');
    
    // Limpa os produtos anteriores
    lista.innerHTML = '';

    // Atualiza apenas o <span> do total
    valorTotal = document.getElementById('valor-total');
    valorTotal.innerText = `R$0`;
    carrinhoDeCompras = [];
}








