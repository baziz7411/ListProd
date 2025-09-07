import { useState, useEffect , memo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



function App() {
  
  const [name, setName] = useState('') 
        console.log("APP")


  return <div className='container my-2 vstack gap-2 fixed-top'>
    <div>
      <label>Prénom</label>
      <Input value={name} onSetChange={setName} placeholder="Tape ton prénom" />
      <div>
        {name.toUpperCase()}
      </div>
    </div>
    <InfoMemo/>
  </div>
}

function Input({ value, onSetChange, placeholder = "Écrire ici..." }) {
  return (
    <input
      type="text"
      className="form-control"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onSetChange(e.target.value)}
    />
  );
}
  


const InfoMemo = memo(function Info(){

   useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 500) // attend 2 secondes

    return () => clearTimeout(timer) // nettoyage si le composant se démonte
  }, [])

  console.log("info")
  
return <div className='alert alert-info'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae provident quo reiciendis iste iure distinctio ratione voluptatem voluptas ea quibusdam debitis odio repudiandae, ut quaerat amet totam recusandae itaque corrupti!
  </div>
})




export default App
