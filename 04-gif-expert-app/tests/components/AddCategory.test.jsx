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
        //hacemos la aserci[on de loq ue queremos que suceda despeue del evento
        expect( input.value ).toBe( 'Saitama' );
        
        //screen.debug();

        });

});