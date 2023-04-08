import React, { useState } from 'react'
import { app, database, storage } from '../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc,setDoc, onSnapshot, query, where } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom"; 

export const Signup = () => {
    const partRef = collection(database, 'users')
    const [data, setdata] = useState({});
    const auth = getAuth();

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value };
        setdata({ ...data, ...newInput });
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
            // // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user);
    
            const storageRef = ref(storage, data.email);
            updateProfile(user,{
              displayName: data.name
            })
            setDoc(doc(database, "users", user.uid), {
                uid:user.uid,
                name: data.name,
                email: data.email
              })
    
            
                 
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
          });

          
      }
    
    

  return (
    <div>
        <div>
            Signup
        </div>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(event) => handleInput(event)}/>
            </div>
            <div>
                <label htmlFor="name">Your full name</label>
                <input type="text" name="name" id="name" onChange={(event) => handleInput(event)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(event) => handleInput(event)}/>
            </div>
            <button onClick={handleSubmit}>Signup user</button>
        </form>
    </div>
  )
}
