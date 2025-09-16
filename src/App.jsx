import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ErrorBoundary } from "react-error-boundary";
import React from 'react'
import useIncrement from './hooks/useIncrement';




function App() {

    return <>
             <Counter />
           </>

}

function Counter(){
    const {count , setIncrement, setDecrement} = useIncrement({base : 0, max : 10, min : 0})
    return <div className='container fixed-top'>
                <h2> Compteur : {count}</h2>
                <button onClick={setIncrement}> Increment </button>
                <button onClick={setDecrement}> Decrement </button>

    </div>
}




export default App


/* 
Install library 

npm i -D vitest @testing-library/react jsdom


modifie le package.json pour ajouter le test 
    "test": "vitest",   dans script

    la commande 
    npm  run test   , pour faire des tests


*/