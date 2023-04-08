import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router'
import { app, database, storage } from '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, setDoc, onSnapshot, query, where, arrayUnion, arrayRemove } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from '@firebase/util'

export const Leaderboard = () => {
  const [items, setitems] = useState([])
  const { cat } = useParams()
  useEffect(() => {
    getUsers();
  }, []);

  const getName = async (id) => {
    const doc1 = doc(database, 'users', id);
    const docSnap = await getDoc(doc1);
    console.log(docSnap.data().name);
    return docSnap.data().name;
  };
  
  const getUsers = async () => {
    const docRef = doc(database, "leaderboard", cat);
    const docSnapshot = await getDoc(docRef);
    console.log(docSnapshot.data().board);
  
    const items1 = Object.entries(docSnapshot.data().board).map(async ([id, index, name]) => {
      const data = await getName(id);
      return { id, index, data };
    });
  
    const items2 = await Promise.all(items1);
    items2.sort((a, b) => b.index - a.index);
    
    setitems(items2);
    console.log(items2);
  };
  

  

  return (
    <div className="h-screen w-screen p-4 py-8 flex justify-center items-center bg-[#AB877D]">
      <div className="w-full h-full shadow-lg shadow-black bg-[#000] rounded-xl">
        <div className="flex flex-col gap-3">
          <h1 className="px-5 w-full font-semibold font text-3xl text-white p-10">
            Leaderboard
          </h1>
          <div className="text-white">
            {cat}
          </div>
          <div className="px-5 w-full overflow-y-hidden">
            <div className="bg-[#AB877D] overflow-auto shadow-xl rounded-xl">
              <div className="flex w-full justify-between items-center p-3">
                <div className="basis-1/2">
                  <p className="font-semibold">Name</p>
                </div>
                <div className="basis-1/2 flex items-center justify-between">
                  <p className="font-semibold">Points</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 w-full overflow-y-hidden">
            <div className="bg-[#AB877D] overflow-auto h-96 shadow-xl rounded-xl">
              {items.map((user, index) => {
                return index % 2 === 0 ? (
                  <div className="flex w-full bg-[#DCB9A3] justify-between items-center p-3">
                    <div className="basis-1/2">
                      <p className="font-semibold">{user.data}</p>
                    </div>
                    <div className="basis-1/2 flex items-center justify-between">
                      <p className="font-semibold">{user.index}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex w-full justify-between items-center p-3">
                    <div className="basis-1/2">
                      <p className="font-semibold">{user.data}</p>
                    </div>
                    <div className="basis-1/2 flex items-center justify-between">
                      <p className="font-semibold">{user.index}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
