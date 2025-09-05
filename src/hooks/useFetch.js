import { useEffect, useState } from "react"

export function useFetch(url,options = {}){

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(()=>{

        fetch(url, {...options,headers:{'Accept': 'application/json; charset=UTF-8',...options.headers}})
            .then(response => {
                console.log("status :" + response.status)

                if(!response.ok){console.log("status :" + response.status)}
               return  response.json() // convertit la reponce en JSON
               })
            .then(data=>{ // afficher le résultat
            
                console.log(data)
                setData(data)

            }).catch((e)=>{  // capturer l'erreur
                console.log(e)
                setErrors(e)

            }).finally(()=>{setLoading(false)})// qu'elle que soit la situation (suucé/erreur) remetre le loading a false
        
        },[])




    return {loading, data, errors}

}