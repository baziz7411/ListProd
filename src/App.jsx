import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { use } from 'react';



function App() {
  const [showInput, setSowInput] = useState(true);

  return <>
    <div className='container my-3 stack'>
      <input
        type='checkbox'
        checked={showInput}
        onChange={(e) => setSowInput(e.target.checked)}
        id="titelSow"
      />
      <label htmlFor="titelSow">Afficher le champ titre</label>

      {showInput && <EditTitle/>}
      <div style={{ height: '300vh' }} />


          
    </div>
    </>
}






function EditTitle() {
  const [titre, setTitre] = useState('');
  const [firstName, setFirstName] = useState('');
  const [y, setY] = useState(0);

   useEffect(()=>{
        const originalTitle = document.title
        return () => {
            document.title = originalTitle
        }
    },[])
  useEffect(()=>{
    document.title = titre
  },[titre]);

  
  // ecouter le scroll


  useEffect(()=>{
    const handler = (e) => {
        console.log('scroll')
        setY(window.scrollY)
    }

    window.addEventListener('scroll', handler);

    return ()=>{window.removeEventListener('scroll', handler)} // pour que quand on affiche pas le composant le lisner scroll ne fonctionne pas 
  },[])



  return <>
    <div className='vstack gap-2'>
        <div> Scroll : {y}</div>
      <input
        className='form-control mb-2'
        placeholder='Modifier le titre'
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />

      <input
        className='form-control mb-2'
        placeholder='Prénom'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
  </>
}


function Exercice() {
  const [duration, setDuration] = useState(5);
  const [secondLeft, setSecondLeft] = useState(duration);

  return (
    <div className="vstack gap-2">
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        placeholder="Timer..."
        className="form-control"
      />

      <p>Décompte : {secondLeft} secondes</p>
    </div>
  );
}


export default App
