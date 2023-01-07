//comunicacion entre componentes
import { useState } from 'react';

export const AddCategory = ( { setCategories }) => {

    // One Punch es el valor de una categoria es un valor que le pasamos al useState si queremos que sea el valor por defecto
    // se lo pasamos como value al input onst [inputValue, setInputValue] = useState('One Punch')
    // al final lo borro para que el valor por defecto este en blanco y no se cargue nada si esta vacio
    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target }) => {
        //console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = ( event ) =>{
       //para evitar el refresh del navegador web por la accion del formulario se utiliza event.preventDefault();
       event.preventDefault(); 
       //console.log(inputValue);
       //validacion para que el campo no se inserte si esta vacio y debe ser mayor a un caracter
       if(inputValue.trim().length <=1) return;

       setCategories( categories => [ inputValue, ...categories ]);
       //limpiamos la caja de texto luego de insertar el valor
       setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
