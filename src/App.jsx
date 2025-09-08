import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createPortal } from 'react-dom'




function App() {
    return <div style={{
                        height : 400,
                        overflowY:'scroll',
                        background:"#EEE",
                        margin:20,
                        position:"absolute",
                        top:0
                    }}>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quia adipisci, fugiat neque quas pariatur iure atque rem recusandae itaque et dignissimos ea repudiandae illo voluptates corporis beatae numquam facere.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sunt quo repellendus aliquam fuga recusandae sed, veritatis delectus vel cumque iusto esse error, reprehenderit velit nesciunt natus asperiores temporibus corrupti.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quae atque saepe voluptate quos facere quod, minus sequi recusandae veniam tempore sapiente accusamus mollitia inventore ratione unde eligendi quis iste!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis molestiae perspiciatis? Debitis a, soluta tempora fugit incidunt minima! Itaque quae pariatur eaque veritatis modi ex sit accusantium illum quos.</p>
        
        <Modal/>
    </div>
}

function Modal(){

    return createPortal(<div style ={{
            position: 'absolute',
            top:0,
            right:0,
            padding:10,
            border:'solid 1px grey',
            background:'#FFF'
    }}>
        Je suis une modale
    </div> ,   document.body  )
}



export default App
