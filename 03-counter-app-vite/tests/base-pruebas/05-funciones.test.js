import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en -funciones', () =>{

    test('getUser debe retornar un objeto ', () => {
      
        const testUser ={
            
                uid: 'ABC123',
                username: 'El_Papi1502'
        
        };

        const user = getUser();
    /* para saber si dos objetos son iguales debe usar toEqual o toStrictEqual
    esto porque javascript cuando tiene dos objeto aunque sean literalmente iguales cada una de sus propiedades
    estan apuntando a valores de memoria diferentes, los primitivos en javascript se compraran por su valor
    pero los objetos se comparan por su ubicación en memoria  por eso la condicion evaluada con  
    expect( testUser).toBe( user) no se puede cumplir por eso debe usarse el toStrictEqual o uno menos estrcito el
    toEqual */ 
        expect( testUser).toEqual( user);

    })

    //tarea
    //evaluar que el nombre sea el mismo que se encuentra en el objeto

    test('getUsuario debe retornar un objeto ', () => {
      
        const name = 'Fernando';

        const user = getUsuarioActivo( name );

        expect( user).toStrictEqual({
            uid:'ABC567',
            username: name
        })

    })
    
    

});