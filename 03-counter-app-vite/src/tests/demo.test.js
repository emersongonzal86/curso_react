//Mi primera prueba y configuraciones necesarias para pruebas 
//las instalaciones deben hacerse porque vite no trae el componente de pruebas preconfigurado
// vamos a usar jets https://jestjs.io/
//en el package.json  "test": "jest --watchAll" se agrega para generar las pruebas
// y evitar el tener que escribir en consola yarn test cada vez para ejecutarlas
//

test('Esta prueba no puede fallar', () =>{

    if( 0 === 1 ){
        throw new Error('No puede dividir entre ceo');
    }
})