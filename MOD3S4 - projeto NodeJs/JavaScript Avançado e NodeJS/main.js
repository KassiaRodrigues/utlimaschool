// // Programação assincrona usando fetch //
//     console.log("1. Inicio do programa");

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => {
//         console.log("2. Dados a API:", data);
//     })
//   .catch(error => {
//     console.error("Erro na chamada à API:", error)
//   });

//   console.log("3. Fim do programa");






// // Callback funtion//
// function operaçãoAssincrona(Callback) {
//     setTimeout(()=> {
//         console.log("Operação assincrona comcluida");
//         Callback();
//     }, 3000);
// }

// console.log("1. Inicio da operação");

// operaçãoAssincrona(() =>{
//     console.log("2. Callback executado depois da operaçaõ assincrona");
// });
// console.log("3. Fim da operação");






// Exemplode Promise simulando uma requisição assincrona//
function simularRequisiçãoAssincrona(){
     return new Promise ((resolve, reject) => {
        setTimeout (() => {
             const sucesso = Math.random() < 8.0; //80% de chance de sucesso
             if (sucesso) {
              resolve ("4. requisiçaobem- sucedida!");
            } else {
               reject(new Error("Erro na requisição"));
            }
        }, 4000);
    });

    undefined
}
console.log("1;Inicio do operação");

simularRequisiçãoAssincrona()
    .then(message => {
        console.log (message);
})

.catch(error => {
    console.error("Erro na operação assincrona:", error. message);
})

.finally(() => {
    console.log("5.Fim da operação");
})