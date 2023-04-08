import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex  justify-center'>
      <div className='w-screen flex justify-between font-mono items-center px-4 p-4'>
        <div className='flex gap-3 text-3xl font-bold'>
          ETTARRA 
        </div>

        <div className='flex items-center gap-5'>
          {/* <button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex items-center gap-1 text-lg'>Support</button> */}
          <a href="/"><button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex items-center gap-1 text-lg'>Profile</button></a>
        </div>
      </div>
    </div>
  )
}
