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

    const [search, setSearch] =  useState('')
    const [showStockedOnly, setShowStockedOnly] = useState(false)

    const [maxPrice, setMaxPrice] = useState(10)

    const visibleProdusts = PRODUCTS.filter( product => { 
        if(showStockedOnly && !product.stocked){  // shoStokedOnly == true : la case est cocher , !product.stocked : le produit n'est pas en stock
            return false
        }
       if(search && !product.name.toLowerCase().includes(search.toLowerCase())){
            return false
        }

        const priceNum = typeof product.price === 'number' ? product.price : Number(String(product.price).replace(/[^0-9.]/g, '')); // transformer les prix de straing en num


        if(priceNum > maxPrice){
            return false
        }
        return true
    })

  return <div className='container fixed-top'>
        <SearchBar 
            search = {search}
            OnSearchChange ={setSearch}
            showStockedOnly={showStockedOnly} 
            onStockedOnlyChange={setShowStockedOnly}           
            maxPrice ={maxPrice}
            onChangePrice ={setMaxPrice}
            />
        <ProductTable products={visibleProdusts}/>
  </div>
}

function SearchBar({search,OnSearchChange, showStockedOnly , onStockedOnlyChange, maxPrice, onChangePrice}){
    return <div className="mt-3">
        <div className='mb-3'>
            <Input 
                placeholder="Rechercher" 
                value={search}
                onChange={OnSearchChange}
                />

            <Checkbox 
            checked={showStockedOnly} 
            OnChecked={onStockedOnlyChange} 
            label="N'afficher que les produits en stock" id="stocked"/>

            <InputRange value={maxPrice} onChange={onChangePrice} />

        </div>
    </div>
}

function InputRange({value, onChange}){
    return <div className='mt-2'>
            <input 
                type='range' 
                className='form-range' 
                min={0}
                max={10}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}/>
                
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
            onChange={(e) => OnChecked(e.target.checked)}
            />
            <label htmlFor={id} className='form-check-label'><strong>{label}</strong></label>
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
