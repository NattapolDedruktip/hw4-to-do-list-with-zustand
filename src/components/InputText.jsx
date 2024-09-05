import React, { useState } from 'react'
import usePackStore from '../store/PackStore'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function InputText() {

    const { arr, addArr } = usePackStore((state) => ({
        arr: state.arr,
        addArr: state.addArr
    }))

    const [text, setText] = useState('')

    const hdlChangeInput = (e) => {
        setText(e.target.value)

    }

    const hdlClickText = () => {
        addArr(text)
        toast.success('Add task successfully')
    }

    console.log('arr', arr)
    console.log('text', text)
    return (
        <div className='border w-2/5 flex flex-col mx-auto'>
            <div className='flex'>
                <input className='flex-grow' onChange={hdlChangeInput} placeholder='text to-do here...' /><button onClick={hdlClickText} className='bg-green-300'>add</button>
            </div>

        </div>
    )
}
