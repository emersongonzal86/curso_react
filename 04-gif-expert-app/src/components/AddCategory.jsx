//Validar que los nombres sean unicos
// hay que tener encuenta que react es casesensitive es decir One y one son diferentes
// en este ejemplo faltaria validar que esos dos string se detectaran como iguales si fuera el caso
// para eso se usan validaciones de javascript
// no debe usarse la funcion indice de javascript 'i' porque el equipo React lo prohibe pues
// react utiliza el valor de la llave para hacer las eliminaciones y podria confundirse ya que 
// usando el indice luego de borra una posicion vuelve a existir ese numero en el indice
import { useState } from 'react';

export const AddCategory = ( { onNewCategory }) => {

   
    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target }) => {
        //console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = ( event ) =>{
       
       event.preventDefault(); 
       if(inputValue.trim().length <=1) return;
       
       onNewCategory(inputValue.trim());
       //setCategories( categories => [ inputValue, ...categories ]);
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
