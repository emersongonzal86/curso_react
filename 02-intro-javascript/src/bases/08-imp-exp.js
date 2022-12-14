//importaciones y exportaciones
/*para importar el contenido de un archivo lo podemos hacer usando 
import {} from y la ruta al archivo desde el archivo actual 
import {heroes} from './bases/data/heroes';
para que esto funcione el archivo importado debe exportarse con export
*/

/* Exportacion por defectos con exportacion individual
debemos colocarla como si estuviesemos desestructurando el objeto
lo que se encuentra entre las llaves son exportaciones individuales
que se encuentran en el mismo arhivo
import  heroes, {owners}  from './bases/data/heroes';
console.log(owners);
*/

/*Metodo para hacer todas las exportaciones en un solo export
se debe dessestructurar de la siguiente manera
import  {heroes,owners }  from './bases/data/heroes';

*/

//import  heroes, {owners }  from '../bases/data/heroes';
import  heroes  from '../bases/data/heroes';

//console.log(owners);
//import { heroes } from './bases/data/heroes';

//import {heroes} from './bases/data/heroes';
//console.log (heroes);

/* se puede importar automático escribiendo el nombre de lo que queremos
importar en este caso heroes.. si no funciona se abre y cierra el archivo heroes
al hacer clic sobre heroes o enter o tab lo importa, lo importa con comillas dobles
pero de preferencia usar sencillas en este ejemplo lo importo en la linea 8 del codigo 
como primera linea heroes lo escribi en la linea 21*/

//heroes

//tarea hacer funcionar el codigo con el metodo find()

//en este caso se colocan los parentesis para indicar que heroes es una funcion
//pero funciona sin parentesis
/*const getHeroeById =(id) =>{
    return heroes.find( (heroes) => heroes.id===id);
}

console.log( getHeroeById(5));*/

//refactorizando y funciona igual

export const getHeroeById =(id) => heroes.find( (heroes) => heroes.id===id);


//console.log( getHeroeById(4));

//Tarea usar filter traer todos 

export const getHeroesByOwner =(owner) => heroes.filter( (heroes) => heroes.owner === owner);
//console.log(getHeroesByOwner('Marvel'));

//Multiples importaciones y exportaciones
/* hay varias formas de hacer importaciones y exortaciones primero vamos 
al archivo de heroes comos su unico trabajo es exportar los heroes lo podemos hacer 
con export defaul heroes pero genera error se debe retirar el nombre del arreglo en el archivo heroes
y quitar las llaves en la importacion, no es muy recomendable hacerlo asi ya que no es facil de leer pues
no se sabe el arreglo que es
es mas recomendable usarlo dejando  const heroes
y hacer la importacion al final del archivo
*/
