import { fireEvent,render, screen } from "@testing-library/react";
import { CounterApp } from '../src/CounterApp';

describe('Pruebas CounterApp', ()=>{

    const InitialValue = 10;

    test('Debe hacer match con el snapshoot', () => { 
        
        
        const { container} = render( <CounterApp value ={ InitialValue }/>);
        expect( container).toMatchSnapshot();
         });

    test('Debe mostrar el valor inicial de 100', () => { 
        
        render( <CounterApp value ={ 100 }/>);
        expect( screen.getByText(100)).toBeTruthy();
         });     

    test('Debe incrementar con el boton +1 ', () => {
        render( <CounterApp value ={ InitialValue }/>);
        fireEvent.click( screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();
    });

    test('Debe decrementar con el boton -1 ', () => {
        render( <CounterApp value ={ InitialValue }/>);
        fireEvent.click( screen.getByText('-1'))
        //screen.debug(); este codigomuestra el screen en la consola
        expect(screen.getByText('9')).toBeTruthy();
    });
     
    test('Debe funcionar el boton Reset', () => {
        render( <CounterApp value ={ InitialValue }/>);
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))
        //ojo el texto es casesensitive
        //fireEvent.click( screen.getByText('Reset'))
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));

       
        //expect(screen.getByText('10')).toBeTruthy();
    });   
});