import {act, renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import useIncrement from "../hooks/useIncrement";


describe('useIncrement', ()=>{
    it('should use the default value', ()=>{
        
        const {result} =  renderHook(() => useIncrement({base:5}))

        expect(result.current.count).toBe(5)

    })
   
    it("should increment", () => {
        const { result } = renderHook(() => useIncrement({ base: 5 }));
        act(() => result.current.setIncrement()); // pour lancé l'exécution
        result.current.setIncrement();
        expect(result.current.count).toBe(6);
    })

    it('should not bypass max',() =>{

        const {result} = renderHook(()=> useIncrement({base:5, max: 7}))
        act(()=> result.current.setIncrement())
        act(()=> result.current.setIncrement())
        act(()=> result.current.setIncrement())
        act(()=> result.current.setIncrement())
        act(()=> result.current.setIncrement())
        expect(result.current.count).toBe(7) // j'increment pluseur fois et j'attend que la valleur max reste a 7



    }) 

})