import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />',() =>{

    test('Debe de cambiar el valor de la caja de texto', () => { 
        //creamos sujeto de prueba
        render( <AddCategory onNewCategory={ () => {} } /> );
        //extraemos el input
        const input = screen.getByRole('textbox');
        // disparamos el evento
        fireEvent.input( input, { target: { value: 'Saitama' } } );
        //hacemos la asercion de loq ue queremos que suceda despeue del evento
        expect( input.value ).toBe( 'Saitama' );
        
        //screen.debug();

        });

     test('Debe de llamar onNewCategory si el input tiene un valor', ()=>{
       
        //incorporamos las jestfunctions esta funcion esta marcada como un MOCK
        //el mock en testing es una simulacion, no es la implementacion real de la funcion
        // pero al ser un jest Mock tengo el control absoluto de esa funcion
        const inputValue    = 'Saitama';
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        //screen.debug();
        expect( input.value ).toBe('');

        //voy a probar que la funcion onNewCategory haya sido llamada
        expect( onNewCategory ).toHaveBeenCalled();

        //voy a probar que sea llamada solo una vez
        expect( onNewCategory ).toHaveBeenCalledTimes(1);

        //voy a probar que se llame con el valor d ela caja de texto Saitama
        expect( onNewCategory).toHaveBeenCalledWith( inputValue );

    
     }); 
     
     test('No debe de llamar onNewCategory si el input está vacio', () => {  

     const onNewCategory = jest.fn();
     render( <AddCategory onNewCategory={ onNewCategory } />);

     const form = screen.getByRole('form');
     fireEvent.submit( form );

     expect( onNewCategory ).toHaveBeenCalledTimes(0);
     //el codigo anterior valida que se halla llamado 0 veces
     //el siguiente codigo es validar que no se halla llamdao usando la negacion
     expect( onNewCategory ).not.toHaveBeenCalled();
   });


});