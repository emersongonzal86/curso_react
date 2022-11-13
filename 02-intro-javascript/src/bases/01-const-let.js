//Variables y constantes
/*Ya no se debe usar var para declarar variables 
La palabra reservada var tiene algunas funciones ocultas que pueden dañar nuestro código sin que lo sepamos, 
dicha palabra nos permite usar variables… ¡sin antes ser declarada!*/
/* --const -> son constantes  que son variables que no van a cambiar o no se van a renombrar
   -- let -> variable a la que le voy a cambir el valor 
   si no se esta seguro si el valor va a cambir o no se deja como constante*/ 

const nombre = 'Emerson';
const apellido = 'González';

let valorDado = 5;
//esto cambia el valorDado de 5 a 4 no es necesario volver aponer let poruqe ya ha sido declarado en la linea 9
valorDado = 4;

console.log(nombre, apellido, valorDado);

/*creacion de variables scope o de un ambito en particular en este caso se encuentra dentro del if 
apesar de llamarse igual son dos variable diferentes ya que la variable valorDado de la línea 19 solo existe dentro del
ambito del if*/

if(true){
    let valorDado = 6;

    console.log(valorDado)
}

//si imprimo el valorDado fuera del if me muestra el valor de la linea 11

console.log(valorDado);

