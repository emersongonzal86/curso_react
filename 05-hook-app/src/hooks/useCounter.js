import { useState } from 'react';


export const useCounter = ( initialValue = 10 )  =>{

    const [ counter, setCounter ] = useState( initialValue ) 

    /* contador que incrementa en 1
    const increment = () =>{
        setCounter( counter +1 );
    }
    const decrement = () =>{
        if ( counter === 0 ) return;

        setCounter( counter -1 );
    }

    const reset = () => {
        setCounter( initialValue );
    }*/

    //contador que incrementa o decrementa en un valor dado por el usuario
    // value =1 significa que el valor por defecto es 1 el valor que me envie el usuario
    // en el value es lo que voy a incrementar o decrementar sino envia nada el valor incrementa en 1
    // si lo colcamos counter + value obtenemos [object Object] pasando de un numero a un string
    // esto pasa cuando es la representacion toString de un objeto, esto pasa porque cuando usamos el onClick
    //enviamos el evento onClick sin ningun argumento pero ahora estamos recibiendo el evento completo
    // lo estamos enviando onClick={(event)=>increment(event)} no me interes el evento click pero si el valor del 2
    //onClick={()=>increment(2)}

    const increment = ( value = 1 ) =>{
        setCounter( counter + value );
    }
    const decrement = ( value = 1 ) =>{
        //if ( counter === 0 ) return;

        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,    
        increment,
        decrement,
        reset,
    }
}