import React,{useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import { app, database, storage } from '../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, setDoc, onSnapshot, query, where, arrayUnion, arrayRemove } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from '@firebase/util'

export const Row = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [count, setCount] = React.useState(props.quantity);
  const [price, setprice] = useState(props.price)

  const handleRemoveItem = async() => {
    await setCount(count - 1);
    updateDoc(doc(database, "users", user.uid), {
      [`cart.${props.name}.quantity`]: count-1,
      [`cart.${props.name}.price`]: (count-1)*props.price,
    });
  }

  const handleAdd = async() => {
    const oldcount = count;
    await setCount(count + 1);
    updateDoc(doc(database, "users", user.uid), {
      [`cart.${props.name}.quantity`]: count+1,
      [`cart.${props.name}.price`]: (count+1)*props.price,
    });
  };

  console.log(props);
  return (
    <div className='flex w-full justify-between items-center p-3'>
        <div className='basis-1/2'>
            <p className='font-semibold'>{props.name}</p>
        </div>
        <div className='basis-1/2 flex items-center justify-between'>
            <div className='flex gap-2 items-center text-[#563300] p-1 px-3 rounded-lg bg-[#fff] border font-semibold'>
                <AiOutlineMinus className='' onClick={handleRemoveItem}/>
                {count}
                <AiOutlinePlus className='' onClick={handleAdd}/>
            </div>
            <p className='font-semibold'>₹{price*count}</p>
        </div>
    </div>
  )
}
