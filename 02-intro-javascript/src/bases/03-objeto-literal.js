//Objetos literales
/* las llaves {} signofican que es un objeto al desplegarlo en consola se pueden ver sus propiedades
llamadas [[Prototype]]: este se crea automaticamente cuando creamos cualquier cosa en javascript,
este Prototype son las funciones o metodos es decir todas las propiedades que tienen los objetos
-- los objetos literales tambien son llamdos diccionarios en otrso leguajes de programación
en general trabajan con pares de valores llave-valor la llave se separa del valor con :
--para recuperar un valor de un objeto de utiliza el nombre del objeto.nombre de llave persona.nombre
-- BUENA PRACTICA: terminar las propiedades del objeto con coma

--console.log({persona}); al colocar llaves creamos otro objeto con ek objeto persona y podemos ver todas las propiedades
de este objeto
{persona: {…}}
persona
: 
apellido
: 
"Stark"
edad
: 
45
nombre
: 
"Tony"
[[Prototype]]
: 
Object
[[Prototype]]
: 
Object

--- console.table(persona); permite ver el objeto en formato de tabla
---BUENA PRACTICA: NO UTILIZAR CARATERES ESPECIALIS COMO TILDES Y Ñ
---Se pueden anidar objetos dentro de otro objeto ejemplo direccion
--PROPIEDAD DE NAVEGAR WEB: Estandarizan que el objeto este ordenado alfabeticamente, no es que 
el objeto cambie o mute solo es presentación del navegador

---IMPORTANTE: JAVASCRIPT SE EJECUTA LINEA POR LINEA EN ORDEN DE ARRIBA HACIA ABAJO
por lo cual al realizar una asignación  de const persona2 = persona;

console.log(persona);
const persona2 = persona;
persona2.nombre = 'Peter';
console.log(persona2)

Muestra el cambio de nombre asignado en la persona 2 pero no ha asignado esta propiedad el segundo objeto
para probarlo movemos el console.log justo sobre el de persona dos y obtenemos el valor de peter

ESTAS MUTACIONES NO SE DEBEN HACER YA QQUE REACT NO LO VA A PERMITIR TAMPOCO VA A MOSTRAR 
NINGUN ERROR NI NINGUN CAMBIO
Para hacer esto se crea un nuevo objeto y se clonan todas las propiedades con el operador spread ... y el nombre del objeto

*/


const persona = {

    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.92333321
    }

};


const persona2 = {...persona};
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2)
