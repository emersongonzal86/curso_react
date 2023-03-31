// para la accion de borrar debemos estandarizar si se envia todo el todo o solo el id
//es necesario que este estandar este definido para que sea consistente en toda la aplicacion
// para que todos los reducers funcionen similares
//{ type: [todo remove], payload: id}


export const todoReducer = ( initialState =[], action ) =>{


    switch ( action.type ) {
        case '[TODO] Add Todo':
            //en caso de no tener algo implementado se coloca throw new Error( 'Action.type = ABC no está implementada');
            return [ ...initialState, action.payload ];

        case '[TODO] Remove Todo':
            return  initialState.filter( todo => todo.id !== action.payload);  
            
        case '[TODO] Toggle Todo':  
            return initialState.map( todo =>{

                if( todo.id ===action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            } )  
    
        default:
            return initialState;
    }


}