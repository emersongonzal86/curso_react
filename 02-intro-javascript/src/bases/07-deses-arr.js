//Desestructuracion de arreglos

//const personajes = ['Goku', 'Vegeta','Trunks'];

/*imprimiendo en consola los nombres de los personajes
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
*/

/*Vamos a desestructurar el arreglo para obtener los nombres de los personajes
para renombrar una constante se coloca el curso sobre ella y se presiona f2
de esta manera se cambia el nombre automaticamente
para extraer el segundo elemento se ubica una coma antes del valor de la constante
esto porque los arreglos no tienen llaves valor sino solo valores por posisción, en
JavaScript los arreglos inician en posición 0
*/

/*const[p1]= personajes;

console.log(p1);
resultado en consola Goku
*/

/*const[,p2]= personajes;

console.log(p2);

resultado en consola Vegeta*/

/*const[,,p3]= personajes;

console.log(p3);

resultado en consola Trunks
*/

//En el siguiente ejemplo desestructura el arreglo para obtener las letras y los nuemeros seprados
const retornaArreglo = () =>{
    return ['ABC', 123];
}
const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

//Tarea
// 1. el primer valor de arr se llamará nombre
//2. el segundo valor se llamará setNombre 

const useState = (valor) => {
    return [valor, ()=>{ console.log('Hola Mundo')}];
}

const [nombre, setNombre] =useState('Goku');


console.log(nombre);
setNombre();