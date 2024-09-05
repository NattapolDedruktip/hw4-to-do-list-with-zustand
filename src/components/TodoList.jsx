import React from 'react'
import usePackStore from '../store/PackStore'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function TodoList() {

    const {arr,delArr} = usePackStore((state)=>({
        arr : state.arr,
        delArr:state.delArr
    }))

    const hdlDelButton = (id) => {
        delArr(id)
        toast.error('Remove task successfully')
    }
    
  return (
    <div className='border w-2/5 flex flex-col mx-auto'>
        {
        arr.map( (item) =>(
            <li className='list-none flex justify-between' key={item.id}>{item.content}<div><button className='bg-pink-400'>edit</button><button onClick={()=>hdlDelButton(item.id)} className='bg-violet-500'>del</button></div></li>
        ))
        
        }
    </div>
  )
}
