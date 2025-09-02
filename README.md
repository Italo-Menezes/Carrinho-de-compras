# 🛒 Carrinho de Compras

Este projeto implementa um **carrinho de compras simples** em JavaScript, manipulando o DOM para adicionar produtos, calcular subtotais e exibir o valor total atualizado automaticamente.

---

## 🚀 Funcionalidades

* Seleção de produtos em um `<select>`.
* Inserção da quantidade desejada.
* Adição dos produtos ao carrinho com:

  * Quantidade.
  * Nome do produto.
  * Subtotal (preço x quantidade).
* Cálculo automático do valor total de todos os itens.
* Exibição do **total dentro de um `<span>` com classe `texto-azul`**.

---

## 📂 Estrutura do Projeto

```plaintext
index.html      -> Estrutura do carrinho e formulário
style.css       -> Estilização (cores, layout, fontes)
script.js       -> Lógica de manipulação do carrinho
```

---

## 📝 Exemplo de Uso

### HTML

```html
<form class="formulario">
  <label class="campo-grupo">
    <span class="texto-medio-azul">Produto</span>
    <select class="produto-input" name="produto" id="produto">
      <option value="Fone de ouvido - R$100">Fone de ouvido - R$100</option>
      <option value="Celular - R$1400">Celular - R$1400</option>
      <option value="Oculus VR - R$5000">Oculus VR - R$5000</option>
    </select>
  </label>

  <label class="campo-grupo">
    <span class="texto-medio-azul">Qtde.</span>
    <input class="quantidade-input" id="quantidade" type="number" placeholder="100">
  </label>

  <section class="botoes-wrapper">
    <button onclick="adicionar()" type="button" class="botao-form botao-adicionar">Adicionar</button>
    <button onclick="limparCarrinho()" type="button" class="botao-form botao-limpar">Limpar</button>
  </section>
</form>

<section class="carrinho">
  <p>Total: <span class="texto-azul" id="valor-total">R$0</span></p>
</section>

<section class="carrinho__produtos" id="lista-produtos"></section>
```

### JavaScript

```javascript
let carrinhoDeCompras = [];

function adicionar() {
  let produtosSelecionados = document.getElementById('produto');
  let produto = produtosSelecionados.value;

  let valor = produto.split('-')[1].trim();
  let nome = produto.split('-')[0].trim();

  let quantidadeDesejada = document.getElementById('quantidade');
  let quantidade = parseInt(quantidadeDesejada.value);

  if (isNaN(quantidade) || quantidade <= 0) {
    alert('Digite uma quantidade válida');
    return;
  }

  carrinhoDeCompras.push({
    name: nome,
    money: valor,
    qntd: quantidade
  });

  adicionarAoCarrinho();
}

function adicionarAoCarrinho() {
  let lista = document.getElementById('lista-produtos');
  lista.innerHTML = '';

  let total = 0;

  carrinhoDeCompras.forEach(item => {
    let produtoSection = document.createElement('section');
    produtoSection.className = 'carrinho__produtos__produto';

    let spanQntd = document.createElement('span');
    spanQntd.className = 'texto-azul';
    spanQntd.innerText = `${item.qntd}x`;

    let nomeProduto = document.createTextNode(` ${item.name} `);

    let spanValor = document.createElement('span');
    spanValor.className = 'texto-azul';
    let valorNumerico = parseInt(item.money.replace('R$', ''));
    let subtotal = valorNumerico * item.qntd;
    spanValor.innerText = `R$${subtotal}`;

    total += subtotal;

    produtoSection.appendChild(spanQntd);
    produtoSection.appendChild(nomeProduto);
    produtoSection.appendChild(spanValor);

    lista.appendChild(produtoSection);
  });

  let valorTotal = document.getElementById('valor-total');
  valorTotal.innerText = `R$${total}`;
}

function limparCarrinho() {
  carrinhoDeCompras = [];
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').innerText = 'R$0';
}
```

---

## 📸 Demonstração Visual

* **Adiciona itens** → aparece no carrinho.
* **Quantidade e subtotal** exibidos lado a lado.
* **Total em azul** atualizado em tempo real.
* **Botão limpar** esvazia o carrinho.

---

## 🏗️ Tecnologias Usadas

* HTML5
* CSS3
* JavaScript (DOM Manipulation)

---

## 📌 Melhorias Futuras

* Botão para remover itens individualmente.
* Salvar carrinho no `localStorage`.
* Adicionar suporte a cupons de desconto.

---

👨‍💻 Desenvolvido por *Ítalo*
