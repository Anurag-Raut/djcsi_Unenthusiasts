import React from 'react'

export const Signup = () => {
  return (
    <div>
        <div>
            Signup
        </div>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="name">Your full name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Signup</button>
        </form>
    </div>
  )
}
