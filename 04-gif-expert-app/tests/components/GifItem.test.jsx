import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem/>',() =>{

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe hacer match con el snapshot', () =>{
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={ title } url={ url } />);
        //importando screen de testing-library-react para ver como se esta renderizando el sujeto de prueba por la consola
        //screen.debug();
        //expect(screen.getByRole('img').src).toBe( url );
        //expect(screen.getByRole('img').alt).toBe( alt );

        const { src, alt} = screen.getByRole('img');
        expect ( src ).toBe( url );
        expect ( alt ).toBe( alt );
    });

    test('debe de mostrar el t[itulo ne le componente', () => {
        render(<GifItem title={ title } url={ url } />);
        expect( screen.getByText( title )).toBeTruthy();
    })
    

});