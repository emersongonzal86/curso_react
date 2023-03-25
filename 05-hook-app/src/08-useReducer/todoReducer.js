

export const todoReducer = ( initialState, action ) =>{


    switch ( action.type ) {
        case 'ABC':
            //en caso de no tener algo implementado se coloca throw new Error( 'ction.type = ABC no está implementada');
            return initialState;
    
        default:
            return initialState;
    }


}