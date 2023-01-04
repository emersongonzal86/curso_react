/* 
en la primera prueba declaro el sujeto de prueba  const { container } = render( <FirstApp title= { title }/>);
y a partir de la segunda solo llamo el render  render( <FirstApp title= { title }/>);
se importa el screen desde testing-libary para llamar el objeto que estamos renderizando
lo que nos ayuda a hacer las limpezas automaticas despues de cada prueba para ver el objeto 
lo podemos hacer con screen.debug(); en la terminal nos muestra el objeto renderizado esdecir 
todo nuestro componente renderizado 
aqui muestra la ultima version actualizada despues de los cambios del DOM



*/
import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola, soy Merson';
    const subTitle = 'Soy un subtítulo';

    test('debe hacer match con el snapshot ', () => {

        const { container } = render( <FirstApp title= { title }/>);
        expect( container ).toMatchSnapshot();
      
    });

    test('Debe de mostrar el mensaje "Hola, soy Merson"', () => { 
        render( <FirstApp title= { title }/>);
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('Debe mostrar el título en un h1', () => { 
        render( <FirstApp title= { title }/>);
        expect( screen.getByRole('heading', {level: 1}).innerHTML).toContain( title );
    });

    test('Debe mostrar el subtitulo enviado por el props ', () => {
      
        render(
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            
            />
        );
        expect( screen.getAllByText(subTitle).length).toBe(2);
    });
    
    
  
});