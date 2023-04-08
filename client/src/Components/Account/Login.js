import React, { useState } from 'react'
import { app, database, storage } from '../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc,setDoc, onSnapshot, query, where } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom"; 

export const Login = () => {

    
  const [data, setdata] = useState({});
  const auth = getAuth();

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setdata({ ...data, ...newInput });
  }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log("hello");
        signInWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
            console.log(userCredential);
           
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
          
          
      }
  return (
    <div>
        <div>
            Login
        </div>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(event) => handleInput(event)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(event) => handleInput(event)}/>
            </div>
            <button onClick={(e)=>handleLogin(e)}>Login user</button>
        </form>
    </div>
  )
}
