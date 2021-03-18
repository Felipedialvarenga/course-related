const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: true }    
]

const pCaro = p => p.preco >= 500
const pFragil = p => p.fragil

const produtosFinal = produtos.filter(pCaro).filter(pFragil)

console.log(produtosFinal)
