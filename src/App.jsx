import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useToggle } from './components /useToggle'
import { useIncrement } from './components /useIncremente'
import { useDocumentTitle } from './components /useDocumentTitle'


function App() {
  const {count, decrement, increment} = useIncrement(0);

  const [name, setName] = useState('')
  useDocumentTitle(name? 'Editer' + name : null)

  return <div>ef

<input value={name} onChange={(e) => setName(e.target.value)} label="Nom : "></input>

    Compteur {count}
    <button onClick={decrement}>Décrement</button>
        <button onClick={increment}>Inrément</button>

  </div>
}
  


export default App
