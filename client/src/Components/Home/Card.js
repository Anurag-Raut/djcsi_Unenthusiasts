import React, { useState } from "react";
import { app, database, storage } from '../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, setDoc, onSnapshot, query, where, arrayUnion } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from '@firebase/util'

export const Card = ({ item }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const handleAdd = () => {
    updateDoc(doc(database, "users", user.uid), {
      cart: arrayUnion({
        item:item.id
      })
    })
  }
  return (
    <div className="p-2">
      <div className="flex p-3 rounded-md shadow hover:shadow-lg">
        <div className="h-24 w-24">
          <img src="/logo192.png" className="h-24 w-24 object-contain rounded-full" alt="logo" />
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
            <button className="text-white bg-[#563300] p-2 px-5 rounded-full" onClick={handleAdd}>Add Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};
