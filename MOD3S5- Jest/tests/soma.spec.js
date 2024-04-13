// extenção do Jest
// Teste Correto
const { sum, sumMelhorado } = require('./../src/soma'); // nome do arquivo JS

it('deve somar 2 + 2 e obter como resultado o valor 4' , () => {
    expect(sum(2,2)).toBe(4) // nome da funçao JS
});

// Teste Errado 
// it('deve somar 2 + 2 e obter como resultado o valor 4' , () => {
//     expect(sum(2,-2)).toBe(4) // negativo
// });

// Teste Errado 
// it('deve somar 2 + 2 e obter como resultado o valor 4' , () => {
//     expect(sum(2,'2')).toBe(4) // uso de String
// });

// Teste Correto com validação  
it('deve somar 2 + 2 e obter como resultado o valor 4' , () => {
    expect(sumMelhorado(2,'2')).toBe(4) 
});