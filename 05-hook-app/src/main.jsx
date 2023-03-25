import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CallbackHook } from './06-memos/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';
// import { MemoHook } from './06-memos/MemoHook';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-uselayoutEffect/layout';
// import { Memorize } from './06-memos/Memorize';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { HooksApp } from './HooksApp';
//import{ CounterApp } from './01-useState/CounterApp';
import './index.css'

//import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';

 ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <TodoApp />
   </React.StrictMode>,
 )
