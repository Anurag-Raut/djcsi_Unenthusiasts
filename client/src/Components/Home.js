import React from 'react'
import { Categories } from './Home/Categories'
import { Navbar } from './Home/Navbar'

export const Home = () => {


  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <Categories/>
        </div>
    </div>
  )
}
