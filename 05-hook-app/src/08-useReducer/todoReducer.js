

export const todoReducer = ( initialState =[], action ) =>{


    switch ( action.type ) {
        case '[TODO] Add Todo':
            //en caso de no tener algo implementado se coloca throw new Error( 'Action.type = ABC no está implementada');
            return [ ...initialState, action.payload ]
    
        default:
            return initialState;
    }


}