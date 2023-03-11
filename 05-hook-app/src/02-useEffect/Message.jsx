//importnacia de la limpieza en useEffect
import { useEffect, useState } from 'react';

export const Message = () => {

    const [ coords, setCoords ] = useState({ x:0, y:0 });
    
    useEffect(() => {
        //con este useEffect se mont y desmonta el componente cuando el usuario es igual al que se esta validando
        //vamos a crear un listener cuando el componente se monta este va a escuchar los movimientos del mouse

        const onMouseMove = ({ x, y })=>{
           // const coords = { x, y };
            //console.log( coords );
            setCoords({ x, y })
            //para mostrar un objeto debo usar JSON.stringify no se puden mostrar los objetos directamente
        }
        window.addEventListener( 'mousemove' , onMouseMove );
            
       return () => {
        //removemos el eventListener
        //si no lo removemos creamos un  error porque cuando mueva el mouse
        //vamos a intentar actualizar el estado de un componente que ya no esta montado
        //en las nuevas versiones ya no genera error pero es un error y no se debe hacer

        window.removeEventListener( 'mousemove' , onMouseMove );

       
       

      }
    }, []);
    

  return (
    <>
     <h3>Usuario ya existe</h3> 
     
        { JSON.stringify( coords )}
    </>
  )
}


