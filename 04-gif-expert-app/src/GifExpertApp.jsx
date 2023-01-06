// Agregando una nueva categoria
import { useState } from 'react';
export const GifExpertApp = () => {


  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball']);

  const onAddCategory =() => {
    // los tres puntos antes de categories se usan para desestructurar el objeto
    //de esta forma inserta una nueva categoria al final de la lista
    setCategories([...categories,'Nueva Categoria']);

    //de esta manera insterna la nueva categoria l inicio de la lista 
    setCategories(['Nueva CAtegoria', ...categories])

    //La siguiente es otra forma de hacerlo utilizando el elemento callback de setCategories
    // setCategories(cat => [...cat, 'Nueva categoria']);

  }

  return (
    <>

    {/* Título */}
        <h1>GifExpertApp</h1>

    {/*Input */}


    {/** Listado de Gifs */}

    <button onClick={ onAddCategory }> Agregar</button>

        <ol>
            { categories.map( category => {
              return <li key={ category }> { category } </li>
            } ) }
         
        </ol>
   

        {/* Gif Item */}
    </>
  )
}
