//useEffect
/** El useEffect es un hook de react que se usa para disparar efectos secundarios entendidos 
 * como un proceso que se quiere ejecutar cuando algo suceda por ejemplo cuando el counte cambie quiero disparar un  efecto
 * cuando la categiria cambia quiero disparar un efecto
 * el useEffect tiene dos argumentos que son el efecto propiamente qu queremos dispararq ue es una funcion callback
 * es decir cualquier funcion y una lista de dependencias que son la lista de condiciones por las cuales
 * se quiere volver a ejecutar el callback las [] es donde se coloca el arreglo con las dependencias si se dejan vacias
 * significa que este hook se va a disparar la primera vez que se crea o construye el componente
 */
import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

  const [counter, setCounter] = useState(10);

  useEffect(() => {
    getGifs(category);
  }, [])

  

  return (
    <>

      <h3>{category}</h3>
      <h5> { counter} </h5>
      <button onClick={ () => setCounter( counter + 1 )}>+1</button>
    </>
  )
}

