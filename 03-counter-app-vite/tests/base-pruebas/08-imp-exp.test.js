import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);
        //console.log(hero)

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    test('getHeroeById debe retornar undefined si no existe el ID', () => {

        const id = 100;
        const hero = getHeroeById(id);
        //console.log(hero)

        // de esta manera evaluamos que devuleve falso,null o undefined 
        expect(hero).toBeFalsy();
    });

    //Tarea:
    //Debe retornar un arreglo de los heroes de DC
    // Length ===3
    // toEqual al arreglo filtrado
    // debe retornar un arreglo con le heroes de Marvel
    //length ===2

    test('getHeroesByOwner debe retornar arreglo con los heroes DC ', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        //console.log(hero)   
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]
      )

      expect( heroes.length ).toEqual(3);

      expect( heroes ).toEqual(heroes.filter( ( heroes ) => heroes.owner === owner ));
    })

    test('getHeroesByOwner debe retornar arreglo con los heroes Marvel ', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        //console.log(hero)   
        expect( heroes ).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ])

      expect( heroes.length ).toEqual(2)
      expect( heroes ).toEqual(heroes.filter( ( heroes ) => heroes.owner === owner ));
    })








});