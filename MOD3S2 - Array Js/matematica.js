/*
    Desenvolvido por Kassia Rodrigues Alves
    Ultima School - 2024
*/

var array = [10.2, 2, 20.2, 27, 12.2];

array.forEach(element => {
    console.log("----------------------------------------------------------------------");

    console.log("--------- Quadrado de " + element + "---------------");
    console.log(element * 2);

    console.log("--------- A raiz quadrada de " + element + "---------------");
    console.log(Math.sqrt(element));

    console.log("--------- Apenas a parte inteira de " + element + "---------------");
    console.log(Math.trunc(element));

    console.log("--------- O número arredondado para baixo de " + element + "---------------");
    console.log(Math.round(element));

    console.log("--------- O número arredondado para cima de " + element + "---------------");
    console.log(Math.ceil(element));

    console.log("----------------------------------------------------------------------");
});