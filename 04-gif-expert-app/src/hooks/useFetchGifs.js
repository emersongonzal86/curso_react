//Un Hook es una funcion que regresa algo

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);
    //creando el loading
    const [isLoading, setisLoading] = useState( true );

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setisLoading(false);

  }

  useEffect(() => {
    getImages();
  }, [])


    return {
        // las imagenes las voy a cargar desde el useState
        //images: images,
        // en ECMAScript6 cuando se tiene una propiedad que apunta al mismo nombre
        //de una variable con ese nombre se puede dejar sola como se muestra aqui images,
        images,
        isLoading
    }
}
