/* todas las pruebas son sincronas es decir ejecuta todo el codigo en secuencia
cuando encuentra una promesa ejecuta la promesa esta se ejecuta de fondo y sigue ejecutando el resto del codigo
llega hasta el final pero debe esperar la respuesta de la promesa tiene una manera de decir espera hasta tener una respuesta que es
el done si no se envia el done();  espera 10 segundos y da error
*/

import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un héroe ', (done) => {

        const id = 1;

        getHeroeByIdAsync( id ).then(hero => {

                expect( hero ).toEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                } );

                //aqui dice ya termine
                done();
            })
    });

    test('getHeroeByIdAsync debe retornar un error si el héroe no existe ', (done) => {

        const id = 100;

        getHeroeByIdAsync( id )
        .catch( error => {

            expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`)

            done();
        });


            
        
    });

});