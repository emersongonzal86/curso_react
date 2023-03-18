import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  
  const [counter, setCounter] = useState( 10 );

  const incrementFather = useCallback(
    //paso el valor de 5 usando el value de la funcion y la c equivale al valor del counte
    // se reemplaza para evitar confundir value con value porque se pueden pasar los parámetros que uno quiera 
    (value) => {
        setCounter( (c) => c + value );
    },
    [],
  );

  //otra forma d eutilizar el useCallback con un ciclo infinito cuando cambia el padre

  useEffect(() => {
    //incrementFather();
    }, [incrementFather])
  
  

//   const incrementFather = () =>{
//     setCounter( counter +1 );
//   }
  
  
    return (
    <>

    <h1>useCallback Hook: { counter }</h1>
    <hr />

    <ShowIncrement increment = { incrementFather } />


      
    </>
  )
}


