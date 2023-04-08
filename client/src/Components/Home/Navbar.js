import React,{useState} from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import {CgProfile} from "react-icons/cg"

export const Navbar = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <div className='flex  justify-center'>
      <div className='w-screen flex justify-between font-mono items-center px-4 p-4'>
        <div className='flex gap-3 text-3xl font-bold'>
            <img src="/ettarra.png" alt="logo" className=" w-[226.77px]"/>
        </div>

        <div className='flex items-center gap-5'>
          {/* <button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex items-center gap-1 text-lg'>Support</button> */}
          <a href="/"><button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex items-center gap-1 text-lg'>{user?.displayName||<CgProfile/>}</button></a>
        </div>
      </div>
    </div>
  )
}
