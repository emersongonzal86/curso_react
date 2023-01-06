// Creando lista de categorias
import { useState } from 'react';
export const GifExpertApp = () => {
/* Para almacenar información y esa información tiene que cambiar el html lo hacenos con un Hook de React para
mantener el estado
usanos el useStateSnippet para crear el codigo const [first, setfirst] = useState(second) setCategories siempre uselo camelCase
vamos a crear las categorias el nombre de una categoria es One Punch
el usesState debe tener un valor inicial y debe ser importado

LOS HOOKS EN REACT NO TIENEN NOMBRE ESTAN BASADOS EN SU POSICION INICIANDO EN 1
los hooks no se pueden colocar dentro de condicionales deben trabajarse continuos para que no pierdan su posicion

const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball']);
const [categories2, setCategories2] = useState([ 'anime', 'manga']);
const [categories3, setCategories3] = useState([ 'Musica', 'Naturaleza']);
en las herramientas de desarrollador aparece una varita magica que sirve para parsear los nombres
para darnos una idea del objeto que tenemos 
*/  

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball']);

   console.log(categories);

  return (
    <>

    {/* Título */}
        <h1>GifExpertApp</h1>

    {/*Input */}


    {/** Listado de Gifs renderizando listado d ecategorias*/}
{/* esto es un error porque falta la propertyKey que es una llave de valor unico No importa lo que sea
pero debe ser valor unico puedn ser fechas numeros en este ejemplo asumimos category como unica
Warning: Each child in a list should have a unique "key" prop */}
        <ol>
            { categories.map( category => {
              return <li key={ category }> { category } </li>
            } ) }
         
        </ol>
   

        {/* Gif Item */}
    </>
  )
}
