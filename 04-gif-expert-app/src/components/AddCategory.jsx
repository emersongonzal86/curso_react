
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewCategory }) => {

   
    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target }) => {
        //console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = ( event ) =>{
        //el siguiente console.log se utiliza para verificar que el submit se este ejecutando en la prueba
       //console.log('Hola mundo desde onSubmit');
       event.preventDefault(); 
       if(inputValue.trim().length <=1) return;
       
       onNewCategory(inputValue.trim());
       //setCategories( categories => [ inputValue, ...categories ]);
       setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form" >
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}