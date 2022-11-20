/*para importar el contenido de un archivo lo podemos hacer usando 
import {} from y la ruta al archivo desde el archivo actual 
import {heroes} from './bases/data/heroes';
para que esto funcione el archivo importado debe exportarse con export
*/

import { heroes } from "./bases/data/heroes"

//import { heroes } from './bases/data/heroes';

//import {heroes} from './bases/data/heroes';
//console.log (heroes);

/* se puede importar automático escribiendo el nombre de lo que queremos
importar en este caso heroes.. si no funciona se abre y cierra el archivo heroes
al hacer clic sobre heroes o enter o tab lo importa, lo importa con comills dobles
pero de preferencia usar sencillas en este ejemplo lo importo en la linea 7 del codigo 
como primera linea heroes lo escribi en la linea 18*/

//heroes

//tarea hacer funcionar el codigo con el metodo find()

//en este caso se colocan los parentesis para indicar que heroes es una funcion
//pero funciona sin parentesis
/*const getHeroeById =(id) =>{
    return heroes.find( (heroes) => heroes.id===id);
}

console.log( getHeroeById(5));*/

//refactorizando y funciona igual

const getHeroeById =(id) => heroes.find( (heroes) => heroes.id===id);


console.log( getHeroeById(4));

//Tarea usar filter traer todos 

const getHeroesByOwner =(owner) => heroes.filter( (heroes) => heroes.owner === owner);
console.log(getHeroesByOwner('DC'));