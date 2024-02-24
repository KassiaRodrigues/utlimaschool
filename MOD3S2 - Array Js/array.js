/*
    Desenvolvido por Kassia Rodrigues Alves
    Ultima School - 2024
*/

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("--------------- WHILE --------------------------");
var index = 0;
while (index < array.length) {
   console.log(array[index]);
   index++;
}

console.log("--------------- DO WHILE --------------------------");
var aux = 0;
do {
    console.log(array[aux]);
    aux++;
} while (aux < array.length);

console.log("--------------- FOR --------------------------");
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);    
}

console.log("--------------- FOREACH --------------------------");
array.forEach(element => {
    console.log(element);
});