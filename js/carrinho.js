// carregar produtos e carrinho
fetch("../data/produtos.json")
.then(res => res.json())
.then(produtos => {

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
const container = document.getElementById("lista-carrinho")

if(carrinho.length === 0){
container.innerHTML = "<p>Seu carrinho está vazio</p>"
return
}

let total = 0
carrinho.forEach(id => {
let produto = produtos.find(p => p.id === id)
total += produto.preco

container.innerHTML += `
<div class="product-card">
<img src="../${produto.imagem}" alt="${produto.nome}">
<div class="product-info">
<h5 class="product-title">${produto.nome}</h5>
<p class="price">R$ ${produto.preco.toFixed(2)}</p>
<button onclick="removerCarrinho(${produto.id})"
class="btn btn-danger">
Remover
</button>
</div>
</div>
`

})
container.innerHTML += `<h3>Total: R$ ${total.toFixed(2)}</h3>`
})

.catch(erro => console.log(erro))

function removerCarrinho(id){
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
carrinho = carrinho.filter(produto => produto !== id)
localStorage.setItem("carrinho", JSON.stringify(carrinho))
location.reload()
}