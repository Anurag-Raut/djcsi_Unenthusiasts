import React, { useEffect, useState } from "react";
import ScratchCard from "react-scratchcard";
import cardImage from "./Coffee_Wall_-1.jpg";
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
  increment,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";
import { useNavigate } from "react-router";

const settings = {
  width: 640,
  height: 480,
  image: cardImage,
  finishPercent: 60,
  onComplete: () => console.log("The card is now clear!"),
};
const ScratchCardComponent = () => (
  <ScratchCard {...settings}></ScratchCard>
);

const Scratchcard = () => {
  const [coupid, setcoupid] = useState("")
  useEffect(() => {
    getCoups()
  }, [])

  // const collectionRef = database.collection('scheme');
  const collectionRef = collection(database, 'scheme')

const getCoups = () => {
  getDocs(collectionRef)
    .then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(data);
      const randomIndex = Math.floor(Math.random() * data.length);
      setcoupid(data[randomIndex].id)

    })
    .catch((error) => {
      console.log(error);
    });
};
  
  return (
    <div className="flex flex-col gap-6 justify-center items-center overflow-y-scroll h-full">
      <h1 className="top-5 p-20 absolute z-0 text-5xl">Scratch to win couple code!</h1>
      <h2 className="top-30 p-20 absolute z-0 text-5xl">{coupid}</h2>
      <div className="z-50 bottom-0 top-25 absolute">
        <ScratchCardComponent />
      </div>
    </div>
  );
};

export default Scratchcard;
