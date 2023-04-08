import React, { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { Card } from "./Card";
import { useNavigate, useParams } from 'react-router'
import { app, database, storage } from '../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, setDoc, onSnapshot, query, where } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from '@firebase/util'

export const Ordering = () => {
  const [menuitem, setmenuitem] = useState([])
  const { cat } = useParams()

  useEffect(() => {
    getItems();
  }, [])

  const getItems = async () => {
    const collectionRef = collection(database, cat);
    onSnapshot(collectionRef, (hacklist) => {
      setmenuitem(hacklist.docs);
    })
  }
  return (
    <div>
      <div className="flex justify-between items-center p-2 text-lg">
        <IoChevronBackOutline />
        <p>Order</p>
        <AiOutlineSearch />
      </div>
      <div>
        <div>
          <p className="text-2xl font-bold p-2">{cat.toUpperCase()}</p>
          <p className="text-sm p-2">Select a category to start your order</p>
        </div>
        <div className="flex flex-wrap">
          {menuitem.map((item) => {
            return (
              <div className="basis-full md:basis-1/2 lg:basis-1/3">
                <Card item={item.data()}/>
              </div>
            );
          }, [])}
          
        </div>
      </div>
    </div>
  );
};
