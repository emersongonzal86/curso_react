//DESESTRUCTURACION DE OBJETOS
//ASIGNACION DESESTRUCTURANTE
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//
const persona ={
    nombre: 'Tony',
    edad:45,
    clave: 'Ironman',
    rango:'Soldado'
};

//aqui no importa el orden en el cual se soliciten las propiedades del objeto
//puede terminar o no en coma
const {edad,clave,nombre,} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

/* En caso de requerir renombrar el valor de nombre se utilizaria nombre:nombre2 pero el valor de
nombre si lo utilizo va a dar erro undefined porque ahora s ellama es nombre2 */
//const {nombre:nombre2} = persona;

//console.log(nombre2);


//extraccion de valores del objeto persona
//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);

/*De la siguiente manera puede ser usada la desestructuración pero es más usada
desde el argumento*/
/*
const retornaPersona = (usuario) =>{

    const {edad,clave,nombre,}= usuario;
    console.log(edad,clave,nombre)
}

retornaPersona(persona);
*/

//Desestructuración directamente desde el argumento en el ejemplo extraigo directamente el nombre
//edad
//se pueden asignar valores por defecto ejemplo rango='capitan' si no viene sale undefined
//si el objeto tiene el valor del rango muestra el del objeto y no el que viene por defecto
/*const retornaPersona = ({nombre,edad, rango='Capitan'}) =>{

    console.log(nombre,edad,rango)
}

retornaPersona(persona);
*/

const useContext = ({clave,nombre,edad, rango='Capitan'}) =>{

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
    
}

//latlng:{lat,lng} este codigo sirve para extraer en su constante independiente los objetos
//que estan dentro del objeto latlng si imprimo console.log(latlng);
//muestra error porque ahora es undefined debo imprimir las nuevas constantes
//de esta manera se extraen objetos anidados y asignarlos a constantes
//como esta en este ejemplo no es tan frecuente que se haga
/*const {nombreClave,anios,latlng:{lat,lng}} = useContext(persona);


console.log(nombreClave,anios);
console.log(lat,lng);
*/
// es mas frecuente hacerlo de esta manera

const {nombreClave,anios,latlng} = useContext(persona);
//haciendo otra desestructuracion
const {lat,lng} =latlng;

console.log(nombreClave,anios);
console.log(lat,lng);

