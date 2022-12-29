import { usContext } from '../../src/base-pruebas/06-deses-obj';
describe('Pruebas en desestructuración de objetos', () =>{

    test('UsContext debe devolver un  objeto', ( )=> {

        //const clave= 'Ironman';
        //const edad = 45;
        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman',
            lat: 14.1232,
            lng: -12.3232,
         
        };
       
        
        const context = usContext( persona );

        //console.log(context)


        expect( context ).toStrictEqual({ 
            nombreClave: 'Ironman',
            anios: 45,
            nombre: 'Tony',
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

    })
});
