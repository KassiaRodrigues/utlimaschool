import { Pagamento } from "../desafio/pagamento.js";

const pagamento = new Pagamento()


let cartao = {
    numero: 1230000000090,
    limite: 100000
}

let listaCompra = [
    {
        item: "Bota",
        preco: 600
    },
    {
        item: "Chinelo",
        preco: 30
    },

]

console.log("Cartão Valido");
pagamento.validaCartao(cartao.numero);

console.log("Cartão Invalido");
pagamento.validaCartao(122);

console.log("Produto dentro do Limite");
pagamento.validaLimite(cartao, listaCompra[1].preco);
