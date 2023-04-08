import React from 'react'
import { Navbar } from './Home/Navbar'

export const Home = () => {

    const categories = [
        {
            name: 'Cold Coffee',
            image:'',
        },
        {
            name: 'Hot Coffee',
            image:'',
        },
        {
            name: 'Electronics',
            image:'',
        },
        {
            name: 'Electronics',
            image:'',
        },
        {
            name: 'Electronics',
            image:'',
        },
        {
            name: 'Electronics',
            image:'',
        },
    ]

  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <div className='flex flex-col'>
                <p>Categories</p>
                <div className='gird grid-cols-3 gap-4'>

                </div>
            </div>
        </div>
    </div>
  )
}
