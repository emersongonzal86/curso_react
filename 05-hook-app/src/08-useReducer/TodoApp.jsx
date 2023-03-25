import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [
    {
        // new Date().getTime() se utiliza para obtener la fecha actual pero solo los numeros crea un id unico
        //ocasionalmente pued generar duplicado si se hace en elmismo milisegundo pero por eso en este ejemplo lo multiplican po 3 
        id: new Date().getTime(),
        descrption: 'Recolectar la piedra del alma',
        done: false,

    },
    {

        id: new Date().getTime() * 3,
        descrption: 'Recolectar la piedra del poder',
        done: false,

    },

]


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)

    return (
        <>
            <h1>TodoApp: 10 <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        {
                            todos.map( todo => (
                                    <li className="list-group-item d-flex justify-content-between">
                            <span className="align-self-center">Item 1</span>
                            <button className="btn btn-danger">Borrar</button>
                        </li>

                            ))
                        }
 
                    </ul>

                </div>

                <div clasName="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            placeholder="Que hay que hace?"
                            className="form-control"

                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1"

                        >
                            Agregar
                        </button>


                    </form>

                </div>


            </div>



        </>
    )
}


