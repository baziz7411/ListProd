import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ErrorBoundary } from "react-error-boundary";
import React from 'react'



const initialState = {
  todos: [
    { name: 'Faire les courses', checked: false },
    { name: 'Ranger les courses', checked: false },
    { name: 'Manger les courses', checked: false },
  ],
  currentIndex: -1, // rien sélectionné au départ
}

function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      if (state.currentIndex < state.todos.length - 1) {
        const newIndex = state.currentIndex + 1;
        const updated = state.todos.map((todo, i) =>
          i === newIndex ? { ...todo, checked: true } : todo
        );
        return { ...state, todos: updated, currentIndex: newIndex };
      }
      return state;

    case "PREV":
      if (state.currentIndex >= 0) {
        const newIndex = state.currentIndex;
        const updated = state.todos.map((todo, i) =>
          i === newIndex ? { ...todo, checked: false } : todo
        );
        return { ...state, todos: updated, currentIndex: newIndex - 1 };
      }
      return state;

    default:
      return state;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container my-3">
      <ul className="list-group list-group-horizontal">
        {state.todos.map((todo, i) => (
          <li
            key={todo.name}
            className={`list-group-item ${todo.checked ? "bg-success text-white" : ""}`}
          >
            {todo.name}
          </li>
        ))}
      </ul>

      <div className="mt-3 d-flex gap-2">
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "PREV" })}
        >
          Précédent
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "NEXT" })}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

export default App
