let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = '';

function adicionar() {
    //recuperar os valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    alert(nomeProduto);
    alert(valorUnitario);
    alert(quantidade);
    let preco = quantidade * valorUnitario;
    alert(preco);
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total')
    campoTotal.textContent = `R$${totalGeral}`
    //calcular o preço, o nosso subtotal
    //adicionar ao carrinho
    //atualizar o valor total
}

function limpar() {

}