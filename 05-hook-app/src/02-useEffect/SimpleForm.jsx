import { useEffect, useState } from 'react';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Emerson',
        email: 'emersongonzal_86@hotmail.com'
    });

    const { username, email } = formState;
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        //console.log(event.target.name);
        //console.log(name, value);
        setFormState({
            //desestructuro el formulario para traer todos los valores para mantenerlos
            ...formState,
            // voy a modificar la qu el name este siendo modificada para eso utilizo de javascript
            //las propiedades computadas de los objetos colocando la propiedad entre [] llave cuadrada
            [name]: value

        });

    }

    //el useEffect es para disparar efectos secundarios
    // se recomienda hacer efectos espcelizados en cada cosa no uno con muchos efectos

    // este useefect se dispara cuando carga el formulario
    useEffect( () =>{
        console.log('useEffect se llamó');
    },[]);

//este useEfect se dispara cada vez que hay un cambio en el formulario
    useEffect( () =>{
        console.log('formState changed');
    },[ formState ]);
// este useEfect se dispara cuando cambia el correo sirve en validacion del correo

    useEffect(()=>{
        console.log('email changed');
    },[ email ]);

    return (
        <>

            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }

            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="emersongonzal86@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }

            />

        </>
    )
}


