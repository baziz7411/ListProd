import { useState } from "react"

export function useIncrement(initielValue = 0){

    const [state, setState] = useState(initielValue)

    return {
        count : state,
       decrement : () => setState(v => v - 1),
       increment : () => setState(v => v + 1) 
    }

    // la le hook renvoi un objet


}