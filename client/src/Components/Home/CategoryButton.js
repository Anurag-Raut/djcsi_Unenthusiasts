import React from 'react'
import { Navigate, useNavigate } from 'react-router'

export const CategoryButton = (props) => {
    const navigate=useNavigate();
  return (
    <button onClick={()=>{navigate(`/ordering/${props.name.toLowerCase().replace(/ +/g, "")}`)}} className='flex flex-col justify-center items-center'>
        <div>
            <img className='rounded-full bg-black h-24 w-24' src={props.image} alt={props.name}/>
        </div>
        <div>
            <p className='font-semibold text-sm text-gray-800'>{props.name}</p>
        </div>
    </button>
  )
}
