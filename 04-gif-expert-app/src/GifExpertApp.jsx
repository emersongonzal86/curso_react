// Agregando una nueva categoria
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball']);

  const onAddCategory =( newCategory ) => {
 
    //console.log(newCategory);
    setCategories([ newCategory, ...categories])

  }

  return (
    <>

    {/* Título */}
        <h1>GifExpertApp</h1>

    {/*Input  agregamos nueva propiedad  a AddCategory tambie puede recibir funciones*/}
      <AddCategory 
      //setCategories={ setCategories} 
      //en los eventos se utiliza el inicio con on significa que ques emitiendo algo es un evento
        onNewCategory={ (value) => onAddCategory(value) }
      />

    {/** Listado de Gifs */}

   

        <ol>
            { categories.map( category => {
              return <li key={ category }> { category } </li>
            } ) }
         
        </ol>
   

        {/* Gif Item */}
    </>
  )
}
