const botoesAdicionar = document.querySelectorAll('.adicionar');

const listaPedido = document.getElementById('lista-pedidos');

const totalElemento = document.getElementById('total');

let total = 0;

botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () =>{
        const produto = botao.parentElement;

        const nome = produto.querySelector("h3").textContent;

        const preco = parseFloat(produto.querySelector('.preco').textContent.replace("R$", ""));


        const itemPedido = document.createElement('li');
        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

        listaPedido.appendChild(itemPedido);

        total += preco;

        totalElemento.textContent = `total: R$ ${total.toFixed(2)}`;
    });
});

const botaoFinalizarPedido = document.getElementById("finalizar-pedido");

botaoFinalizarPedido.addEventListener("click", () =>{
    alert("Pedido finalizado " + totalElemento.textContent);
    listaPedido.innerHTML = "";
    total = 0;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
})