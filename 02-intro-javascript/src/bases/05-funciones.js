// FUNCIONES EN JS
/*
estas funciones 
function saludar (nombre){
return `Hola, ${nombre}`;
}
es mejor no usarlas de esta manera porque sus valores se pueden sobreescribir facilmente

function saludar (nombre){
return `Hola, ${nombre}`;
}

saludar=30;
console.log(saludar);

lo que ahora retorna el valor de 30 pisando la funcion

lo ideal es hacerlo asignando la funcion a una constante

const saludar = function (nombre){
return `Hola, ${nombre}`;
}

saludar=30;

console.log(saludar);

De esta manera al intentar asignar el valor de 30 genera el error de tratar de asignar 
una variable a una constante
*/

/*
FUNCIONES DE FLECHA

const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
    }


console.log(saludar2('VEGETA'));

---Si la funcion tiene un solo return puede usarse de la siguiente manera y 
funciona igual

const saludar3 = (nombre)=>`Hola, ${nombre}`;
console.log(saludar3('Goku'));

--Funcion que no recibe ningun argumento
const saludar4 = ()=>`Hola Mundo`;
console.log(saludar4());

--devolver objeto de manera implicita es decir el return de esta funcion de flecha es un
objeto

tenemos esta funcion
const getUser =()=>{
    return {
        uid:'ABC123',
        username: 'El_papi1502',
    }
}

para devolverla de manera implicita hacemos

const getUser =()=>{
    ({
        uid:'ABC123',
        username: 'El_papi1502',
    });
se obtiene el mismo resultado sin la palabra return

{uid: 'ABC123', username: 'El_papi1502'}

*/


const saludar = function (nombre){
return `Hola, ${nombre}`;
}

const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
    }

const saludar3 = (nombre)=>`Hola, ${nombre}`;

const saludar4 = ()=>`Hola Mundo`;



const getUser =()=>{
    return {
        uid:'ABC123',
        username: 'El_papi1502'
    }
}


//console.log(saludar2('VEGETA'));
//console.log(saludar3('Goku'));
//console.log(saludar4());

const user = getUser();
console.log(user);

//Tarea
//1. Transformar en funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Prueba
/*
function getUsuarioActivo(nombre){
    return{
        uid:'ABC567',
        username: nombre

    }
};
const usuarioActivo = getUsuarioActivo('Emerson');
console.log(usuarioActivo); */


const getUsuarioActivo  = (nombre) =>
    ({
        uid:'ABC567',
        username: nombre

    })

const usuarioActivo = getUsuarioActivo('Emerson');
console.log(usuarioActivo);