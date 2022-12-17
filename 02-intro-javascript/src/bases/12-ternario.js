// Operador Condicional Ternario
 const activo = true;
// let mensaje = '';

// if (activo) {
//     mensaje = 'Activo';
// }else {
//     mensaje = 'Inactivo';
// }

//const mensaje = (!activo) ? 'Activo' : 'Inactivo';

// si no fuera booleano
//const mensaje = (activo === true) ? 'Activo' : 'Inactivo';

//para devolver null en caso que la condicion  no se cumpla
//const mensaje = (activo === true) ? 'Activo' : null;

//Ejecutar el codigo solo cuando la condicion se cumple y caso contrario no hacer nada
//el operador ternario normal siemre espera las dos condiciones por lo que se utiliza
// el && y este codfo funciona
//const mensaje = activo && 'Activo';
//en el siguiente ejemplo si se utiliza negacion devuelve falso
//const mensaje = !activo && 'Activo';

//Esta es la forma corta de hacer un if
const mensaje = activo && 'Activo';

//tabien se usa de esta manera

//const mensaje = (activo === true) && 'Activo';


console.log(mensaje);