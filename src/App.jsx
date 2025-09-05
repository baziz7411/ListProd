import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useFetch } from './hooks/useFetch'


function App() {

  const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=5000')

  return <div className='container my-2 fixed-top'>

            {loading && <div className='spinner-border' role="status"> 

                            <span className='visually-hidden'> Loading...</span>

                        </div>}
            
            {errors && <div className='alert alert-danger'>{errors.toString()}</div>}
            {data && <div>
                        <ul>
                            {data.map(article => (<li key={article.id}> {article.title} </li>))}
                        </ul>

                     </div>}
  
  </div>
}
  


export default App
