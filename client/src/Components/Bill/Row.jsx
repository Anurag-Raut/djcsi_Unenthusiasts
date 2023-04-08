import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

export const Row = (props) => {
  return (
    <div className='flex w-full justify-between items-center p-3'>
        <div className='basis-1/2'>
            <p className='font-semibold'>{props.name}</p>
        </div>
        <div className='basis-1/2 flex items-center justify-between'>
            <div className='flex gap-2 items-center text-[#563300] p-1 px-3 rounded-lg bg-[#fff] border font-semibold'>
                <AiOutlineMinus className=''/>
                {props.quantity}
                <AiOutlinePlus className=''/>
            </div>
            <p className='font-semibold'>₹{props.price*props.quantity}</p>
        </div>
    </div>
  )
}
