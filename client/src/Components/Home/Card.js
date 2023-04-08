import React, { useState } from "react";
import { app, database, storage } from '../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, setDoc, onSnapshot, query, where, arrayUnion, arrayRemove } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from '@firebase/util'
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

export const Card = ({ item,cat }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [count, setCount] = React.useState(0);
  const [addItem, setAddItem] = React.useState(false);
  
  const handleAdd = async() => {
    // const docRef = collection("leaderboards").doc(cat);
    // if (count === 1) {

    //   updateDoc(docRef, {
    //     // [`cart.${item.name}.quantity`]: count+1,
    //     // [`cart.${item.name}.price`]: item.price1,
    //     [`cart.${item.name}.quantity`]: count+1,
    //   });
    // }
    
    const oldcount = count;
    setAddItem(true);
    await setCount(count + 1);
  
    // updateDoc(doc(database, "users", user.uid), {
    //  cart:cart['hotcoffee']=1,
    // });

    updateDoc(doc(database, "users", user.uid), {
      [`cart.${item.name}.quantity`]: count+1,
      [`cart.${item.name}.price`]: item.price1,
    });
    updateDoc(doc(database, "leaderboard", cat), {
      [`board.${user.uid}`]: count+1,
    });

  };

  // const handleAddItem=async()=>{
  //   setAddItem(true);
  //   await setCount(count + 1);

  //   updateDoc(doc(database, "users", user.uid), {
  //     "cart.quantity": count
  //   })
  // }
  

  const handleRemoveItem = () => {
    setCount(count - 1);
    if (count === 1) {
      setAddItem(false);
    }
  }
  return (
    <div className="p-2">
      <div className="flex p-3 rounded-md bg-white shadow-lg hover:shadow-sm">
        <div className="h-24 w-24">
          <img
            src="/logo192.png"
            className="h-24 w-24 object-contain rounded-full"
            alt="logo"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-1 ml-4">
          <img src="/veg.svg" className="" alt="veg" />
          <p className="text-sm font-semibold">{item.name}</p>
          <p className="text-sm font-mono font-semibold text-gray-500">
            Size and kcal
          </p>
          <p className="text-xs font-mono font-semibold">
            {item.desc}
          </p>
          <div className="flex items-center justify-between py-3 pr-2 w-full">
            <p className="">₹ {item.price1}</p>
            {addItem ? (
              <div className="flex gap-5 p-2 border shadow-xl rounded-full">
                <button onClick={handleRemoveItem} className=""><AiOutlineLeft/></button>
                {count}
                <button onClick={handleAdd} className=""><AiOutlineRight/></button>
              </div>
            ) : (
              <button
                onClick={handleAdd}
                className="text-white bg-[#563300] p-2 px-5 rounded-full"
              >
                Add Item
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};