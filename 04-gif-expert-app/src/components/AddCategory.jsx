import { useState } from 'react';

export const AddCategory = () => {

    // One Punch es el valor de una categoria es un valor que le pasamos al useState si queremos que sea el valor por defecto
    // se lo pasamos com value al input
    const [inputValue, setInputValue] = useState('One Punch')
    const onInputChange = ({ target }) => {
        //console.log( target.value );
        setInputValue(target.value);
    }

    const onSubmit = ( event ) =>{
       //para evitar el refresh del navegador web por la accion del formulario se utiliza event.preventDefault();
       event.preventDefault(); 
       console.log(inputValue);
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
