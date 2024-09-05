import React from 'react'


//step1
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

//step2
const packStore = (set) => ({
    arr:[],
    addArr : (newValue) => set((state)=>({
        arr:[...state.arr,{id:Date.now(),content:newValue}]
    })),
    delArr : (id) => set((state) =>({
        arr: state.arr.filter( (item) => item.id != id )
    }))
})
  

//extra step use persist for not reappear when refresh 
const usePersist = {
    name : 'packStore',
    getStorage : ()=> localStorage,
    partialize : (state) => ({
        arr : state.arr
    }) 
}

//step3
const usePackStore = create(persist(packStore,usePersist ))

export default usePackStore
