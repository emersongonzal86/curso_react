import { getByAltText, render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    // test('Debe de hacer match con el snapshot ', () => {
        
    //     const title = 'Hola soy merson';
    //     const { container } = render( <FirstApp title={ title } /> ); 

    //     /* el  oMatchSnapshot() toma una imagen del componente que crea en la carpeta __snapshots__ al mismo nivel de la carpeta
    //     donde se estan haciendo las pruebas en la prueba compara la imagen del componente contra lo qu encuentra en elcomponente en ese momento
    //     si es diferente muestra el error. 
    //     En la consola muestra la opcion para con la tecla u se actualice la imagen si es que el codigo cambio y no es un error
    //     › 1 snapshot failed from 1 test suite. Inspect your code changes or press `u` to update them.

    //     Es recomendable hacer la prueba del snapshot de ultima cuando ya el componente no va a tener mas cambios
    //     */
    //     expect( container ).toMatchSnapshot();
    // });

    test('Debe mostrar el título en un h1', () => {
        const title = 'Hola soy merson';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> ); 

        //expect( getByText( title )).toBeTruthy();

        expect( getByTestId('test-title').innerHTML).toContain( title );



        // //esto no es lo recomendado pero lo usamos como ejemplo por le momento

        // const h1 = container.querySelector('h1');
        // //console.log(h1.innerHTML);

        // //Esta evaluacion puede evaluar si por ejemplo tiene espacios el título y no beria la prueba lo muestra como error
        // // se puede usar con .toBe para que evalue que sea igual o con toContain para decirle que contenga ese texto no importa si tiene espacios al inicio o al final
        // expect( h1.innerHTML ).toContain( title );

    });

    test('Debe mostrar el subtitulo enviado por props ', () => {
        
        const title = 'Hola soy merson';
        const subTitle = 'Soy un subtitulo';
        const {  getAllByText } = render(
             <FirstApp 
                    title={ title } 
                    subTitle={ subTitle }
             /> 
             ); 

             //evalua que el subtitulo exista si exta mas de una vez arroja error
             //expect(getByText( subTitle)).toBeTruthy();

             //cuando existe mas de un elemento que se esta evaluando se utiliza getAllByText
             //en este ejmplo tenemos dos subtitulos y con esta prueba lo comprobamos
             expect(getAllByText( subTitle).length).toBe(2);

    });
    
    
    

});