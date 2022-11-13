//Template String
/* E una manera para concatenar Strings para colocar variables dentro de strings o resultados 
de operaciones, caracteres multilinea*/
/*en Javascript cualquier valor que no se especifique o cualquier variable que no se inicialice 
va a tener el valor de undefined
*/

const nombre    ='Emerson';
const apellido  ='González';

// forma antigua de hacerlo -> const nombreCompleto = nombre+ ' '+ apellido;
const nombreCompleto1 = `${nombre} ${apellido}`; //forma nueva de hacerlo (recibe el espacio en medio de nombre y apellido)
const nombreCompleto2 = `
${nombre}
${apellido}
`;/* en esta forma hay saltos de linea inicianddo, en medio y al final*/

console.log (nombreCompleto1);

function getSaludo(nombre){
    return 'Hola' + nombre;

}

console.log(`Este es un texto: ${getSaludo(nombre)}`);