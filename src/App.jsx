import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const PRODUCTS = [  
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]


function App() {
 return <div className='container fixed-top mt-5'> 
    <ProductTable products={PRODUCTS}/>
  </div>
}




function ProductTable({products}){

    const rowsProduit = []
    let lastCategory = null

    for(let product of products){
        if(product.category !== lastCategory){
           rowsProduit.push(<ProductCategoryRow key={product.category} name={product.category}/>) 
        }
        lastCategory = product.category
        rowsProduit.push(<ProductRow product={product} key={product.name} />)
    }
    return     <table className="table table-striped table-hover table-bordered shadow">

      <thead className="table-dark">
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {rowsProduit}
        </tbody>
    </table>

}


function ProductRow({product}){

    const style = product.stocked ? undefined : {color : 'red'}
    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}

function ProductCategoryRow({name}){
    return <tr>
        <td colSpan={2}><strong>{name}</strong></td>
    </tr>
}


export default App
