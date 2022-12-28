//Jest - Expect - toBe
//instalar la dependencia de desarrollo yarn add -D @types/jests para obtener la 
//ayuda de visual studio code de los Expect de jest los metodos como el toBe
// para crea agrupadores de pruebas se utiliza describe

describe('Pruebas en <DemaComponent />',() => {
    
    test('Esta prueba no puede fallar', () =>{

        // 1. Inicializacion de la prueba
     
        const message1 = 'Hola Mundo';
     
        // 2. Estímulo
         //eliminar espacios al inicio y final del mensaje
        const message2 = message1.trim();
     
        //3. Observar el comportamiento esperado
     
        expect( message1 ).toBe( message2 );
     });
});

