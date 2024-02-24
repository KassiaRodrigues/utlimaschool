// Cartao default
/*
    {
        numero: 1230000000090
        limite: 100000
    }
*/

export class Pagamento{

    validaCartao(cartao = '12300000090'){
        if(cartao.length == 13){
            console.log('cartao valido');
        } else {
            console.log('cartao invalido');
        }
    }

    validaLimite(cartao, compraPretendida){
        if(cartao.limite >= compraPretendida){
             console.log('ok')
        } else {
            console.log('Sem Limite')
        }
    }
}