import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            //desestructuro el formulario para traer todos los valores para mantenerlos
            ...formState,
            // voy a modificar la qu el name este siendo modificada para eso utilizo de javascript
            //las propiedades computadas de los objetos colocando la propiedad entre [] llave cuadrada
            [name]: value

        });

    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return{
        //desestructuro el formState para obtener todos sus valores y ahorra la desestructuracion en el FormWithCustomHook
        // asi pasamos todos los valores del formulario para tenerlso dsiponibles en 
        // const { formState, onInputChange, username, email, password } = useForm({
        //     username: '',
        //     email: '',
        //     password: ''
    
        // });
        ...formState,
        formState,
        onInputChange,
        onResetForm,

    }
}


