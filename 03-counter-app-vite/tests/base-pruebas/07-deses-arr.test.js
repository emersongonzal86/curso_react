// prueba desestructuracion de arreglos
import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () =>{

    test('Debe retornar un string y un número', () => {

        const [ letters, numbers ] = retornaArreglo();

        /* 
        expect( letters ).toBe( 'ABC');
        
        el toBe evalua el tipo de dato por eso si se coloca '123' esperaria un strin
        
        expect( numbers ).toBe( 123) ;
      */

        /*otra forma de hacer las evaluaciones cuando no se que valor exacto esta regresando pero si se 
        que tipo de dato es se puede evaluar de la siguiente manera
        */

        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')
/* en este codigo verificar la S mayuscula en la palabra String si no esta en mayuscula no funciona
lo que dice es que espera cualquier tipo de string asi si cambia el valor del al variable no fallaria la pruaba
desde que el valor siga siendo un string
*/
        expect ( letters ).toEqual(expect.any( String ));


    })
    

});