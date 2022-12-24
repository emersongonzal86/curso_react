//Mi primera prueba y configuraciones necesarias para pruebas 
//las instalaciones deben hacerse porque vite no tra el componente de pruebas preconfigurado
// vamos a usar jets https://jestjs.io/

test('Esta prueba no puede fallar', () =>{

    if( 0 === 1 ){
        throw new Error('No puede dividir entre ceo');
    }
})