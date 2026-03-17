// carregar produtos do JSON
fetch("../data/produtos.json")
.then(resposta => resposta.json())
.then(produtos => {

const container = document.getElementById("lista-produtos")

produtos.forEach(produto => {

container.innerHTML += `
<div class="product-card">
<img src="../${produto.imagem}" alt="${produto.nome}">
<div class="product-info">
<span class="badge-eco">${produto.categoria}</span>
<h5 class="product-title">${produto.nome}</h5>
<p class="product-text">${produto.descricao}</p>
<p class="price">R$ ${produto.preco.toFixed(2)}</p>
<button class="btn btn-eco w-100"
onclick="adicionarCarrinho(${produto.id})">

Adicionar ao Carrinho
</button>
</div>
</div>
`

})

})
.catch(erro => console.log("Erro ao carregar produtos:", erro))

function adicionarCarrinho(id){
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

carrinho.push(id)
localStorage.setItem("carrinho", JSON.stringify(carrinho))
alert("Produto adicionado ao carrinho!")

}