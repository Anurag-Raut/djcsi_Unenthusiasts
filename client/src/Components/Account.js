import React from 'react'
import { Login } from './Account/Login'
import { Signup } from './Account/Signup'

export const Account = () => {
  return (
    <div>
        {false?<div><Signup/></div>:<div><Login/></div>}
    </div>
  )
}