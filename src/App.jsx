import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ErrorBoundary } from "react-error-boundary";
import React from 'react'



function reducer(state, action) {
  switch (action.type) {
    case 'REMOVE_TODO': {
      return {
          todos: state.todo.filter(t => t !== action.todo)
      };
    };
    case 'ADD_TODO': {
      return {
        todos: [{
          id: state.todos.length,
          text: action.text
        }, ...state.todos]
      }
    }
  }
  throw Error('Action non reconnue: ' + action.type);
}



function App() {
  const [state, dispatch] = useReducer(reducer, {
        todos: [{
            name : "Faire les courses",
            checked : false
        },
        {
            name :"Ranger les course",
            checked : false
        },
        {
            name : "Manger les course",
            checked : false
        }]

  })

  return <div className="container fixed-top">
            <ul>
                {state.todos.map(todo => (<li key ={todo.name}>{todo.name} <button>supprimer</button></li>))}
            </ul>


  </div>
    
}

export default App
