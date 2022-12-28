/* se obtiene este error 

Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

se requiere hacer la configuracion de jest Using Babel

yarn add --dev babel-jest @babel/core @babel/preset-env

ESTAS SON DEPENDENCIAS DE DESARROLLO

HAY QUE CREAR UN ARCHIVO EN EL PROYECYO babel.config.cjs  ESTO ES EN VITE en Create React App ya esta hecho

y en ese archivo pegar este codigo 

module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

*/

import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () =>{

    test('getSaludo debe retornar "Hola Fernando"', () => {
      
        const name = 'Fernando';
        const message = getSaludo ( name );

        expect( message ).toBe(`Hola ${ name }`)
    });
    

});