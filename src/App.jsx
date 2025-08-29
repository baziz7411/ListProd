import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const PRODUCTS = [  
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]


function App() {
  return <div className='container fixed-top'>
    <SearchBar/>
  </div>
}



function SearchBar(){
    return <div className="mt-3">
        <div className='mb-3'>
            <Input placeholder="Rechercher" value="" onChange={() => null}/>
            <Checkbox checked={false} OnChecked={() => null} label="N'afficher que les produits en stock" id="stocked"/>
        </div>
    </div>
}


function Input({placeholder, value, onChange}){
    return <div>
        <input
        type='text'
        className='form-control'
        value={value}
        placeholder={placeholder}
        onChange={ (e)=> onChange(e.target.value)}
        />      
    </div>
}
function Checkbox({checked, OnChecked, label, id}){
    return <div className='form-check'>
        <input
            id={id}
            type='checkbox'
            className='form-check-input'
            checked={checked}
            onChange={(e) => onChange(e.target.value)}
            />
            <label htmlFor={id} className='form-check-label'><strong>{label}</strong></label>
    </div>
}





export default App
