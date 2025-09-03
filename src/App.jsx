import { useId, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const security = useMemo(()=>{return passwordSecurity(password)},[password])  //useMemo parceque le calcul de mdp prend bcp de temps et pour que ca soit pas tout le composant qui serai impacté 

    console.log(useId())


    return <>
                <div className='container my-3 vstack gap-2'>
                    <input 
                        className="form-control"
                        label="Nom d'utilisateur"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='Name'
                    />
                    <input 
                        className="form-control"
                        label="Password"
                        type='password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder='Password'

                    />

                    <p> Sécurité : {security}</p>
                </div>
    
    
    
    </>
}


function passwordSecurity(password){

    // pour que ça prend un peux de temps 
    let startTime = performance.now();
    while(performance.now() - startTime < 400){}


    return password.length < 3 ? "Failble" : password.length < 6 ? "Moyen" : "Fort"
}

export default App
