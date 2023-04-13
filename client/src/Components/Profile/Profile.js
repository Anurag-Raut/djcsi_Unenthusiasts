import React, { useState, useEffect } from "react";
import { Navbar } from "../Home/Navbar";
import { ProfileCard } from "./Wallet";
import { useStateContext } from "../../context/ind";
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
  getDoc,
  deleteDoc,
  setDoc,
  onSnapshot,
  query,
  where,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;
    // const 
    const [store,setstore]=useState([]);
    const {gettokens}=useStateContext();
    const [tokens,settokens]=useState([]);
  
    async function fun(){
        const a=await gettokens();
        settokens(a);
    } 
    async function getuser(){
        const ref=doc(database,"users",user.uid)
        const docSnap = await getDoc(ref);
        setstore(docSnap.data());
        
    }
    useEffect(()=>{
      getuser();
       fun();
       
    },[])
    console.log(tokens);
  return (
    <div className="h-screen overflow-y-scroll w-full">
      <div>
        <Navbar />
      </div>
      <div className="w-[50vw] mt-10 flex flex-col gap-3 justify-center text-xl text-center mx-auto rounded-md bg-[#DEAD84] p-5">
        <div className="flex flex-row justify-between">
          <h1 className="font-thin">{store?.name}</h1>
          <h1 className="font-thin">Email: {store?.email}</h1>
        </div>
        <hr className="border-[#563300]" />
        <h1 className="font-thin">Points : {store?.points}</h1>
      </div>
      <h3 className="mt-10 text-[#563300] flex justify-center text-center mx-auto">
        Your Coupons
      </h3>
      <div className="mt-10 flex flex-col gap-2 justify-center items-center text-center mx-auto">
        {/* <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard /> */}
      </div>
    </div>
  );
}

export default Profile;