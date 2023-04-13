import React,{useState,useEffect} from 'react'
import { EventsButton } from './EventsButton'
import { app, database, storage } from "../../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  onSnapshot,
  query,
  where,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";

export const Events = () => {
  const [events, setevents] = useState([])

  useEffect(() => {
    getEvent();
  }, [])

  const getEvent=async()=>{
    const collectionRef = collection(database, "events");
    onSnapshot(collectionRef, (hacklist) => {
      setevents(hacklist.docs);
    })
  }
  
  return (
    <div className='flex flex-col gap-3 bg-[#F2EAF2] rounded-md'>
        <p className="text-2xl font-bold p-2 mx-auto text-[#AB877D]">
        Events
      </p>
      <div className=" flex flex-row snap-x text-white snap-mandatory pb-10 scroll-smooth overflow-x-auto flex-nowrap scrollbar-hide md:h-full md:p-5 items-center">
        {events.map((item) => {
                      const item1=item.data()
            return (
              <div className="bg-cover p-3 snap-center w-full md:w-1/3  h-full shadow-md rounded-none flex-shrink-0"><EventsButton item={item1}/></div>
            );
          }, [])}
      </div>
    </div>
  )
}