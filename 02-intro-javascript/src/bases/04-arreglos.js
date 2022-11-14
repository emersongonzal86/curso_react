//ARREGLOS EN JS
/* 
Un arregloes una colección de información que se encuentra dentro de una misma variable
se identifica por el uso de llaves cuadradas []
los arreglos pueden denotarse de esta manera const arreglo = new Array(); pero no esmuy usada
seutiliza cuando se va a usar valores fijos const arreglo = new Array(100); lo que crea
un arreglo con 100 posiciones vacias, pero pueden ser aletardos mediante push() 
el cual adiciona un valor al arreglo, no es recomendable usar el push() porque 
modifica el objeto principal
para adicionar algo a un arreglo se utiliza el operador spread ... que son los tres puntos
en el ejemplo
let arreglo2 = arreglo;
arreglo2.push(5);

console.log(arreglo);
console.log(arreglo2);

obtenemos
(5) [1, 2, 3, 4, 5]
index.js:31 (5) [1, 2, 3, 4, 5]

lo cual muestra que se ha modificado el arreglo principal a pesar de solo agregar el 5 en el arreglo2

para adiconar el 5 utilizamos el operador spread ... junto con el objeto se le adiciona el 5
let arreglo2 = [...arreglo,5];

lo cual obtiene 

(4) [1, 2, 3, 4]
index.js:42 (5) [1, 2, 3, 4, 5]

mostrando que solo se modifico el arreglo2 adicionando el 5
es decir se creo un nuevo arreglo y se le adiciono la posición 5
*/

//const arreglo = new Array(100);
const arreglo =[1,2,3,4];
//arreglo.push(1);

/*let arreglo2 = arreglo;
arreglo2.push(5);

console.log(arreglo);
console.log(arreglo2);*/

let arreglo2 = [...arreglo,5];

/*metodo Map https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
funcion de callback const arreglo3 = arreglo2.map(function(){});
es una funcion que se va a ejecutar dentro de un metodo y se ejecutara por cada uno de los elementos
que se encuentren dentro del arreglo const arreglo3 = arreglo2.map(function(numero){}); asi obetnenos 
5 undefined porque no se ha definido un return si queremos multiplicar pro 2 cada numero del arreglo
onst arreglo3 = arreglo2.map(function(numero){
    return numero *2;
});
y obtenemos
(5) [2, 4, 6, 8, 10]
esto es un nuevo arreglo y lo puedo modificar individualmente
*/
const arreglo3 = arreglo2.map(function(numero){
    return numero *2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);