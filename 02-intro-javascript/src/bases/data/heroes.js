//para inluir el contenido de este archivo en el indes debe exprotarse con export
//export defaul heroes lo convierte en exportacion por defecto generar error porqu edebe quitarse el nombre
//al arreglo heroes
/* es mas recomendable hacerlo dejando el arreglo como const heroes y al final del archivo hacer
la exportacion por defecto con export default heroes; */
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//Exportcion por defectos con exportacion individual

//export const owners = ['DC','MARVEL'];

//export default heroes;

/*Meodo para hacer todas las exportaciones en un solo export
para identificar cual es la exportación por defecto se escribe as default en la exportacion por defecto
pero hay que cambiar en el archivo donde se importa para que quede 
import herores, {owners} from './bases/data/heroes';*/

//const owners = ['DC','MARVEL'];

/*export {
    heroes as default,
    owners
}*/

// de preferencia se realizarna de la siguiente manera
//exportaciones individuales


export const owners = ['DC','MARVEL'];

//exportaciones por defecto
export default heroes;