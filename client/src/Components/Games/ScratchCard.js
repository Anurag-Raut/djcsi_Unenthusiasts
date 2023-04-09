import React from "react";
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
  finishPercent: 50,
  onComplete: () => console.log("The card is now clear!"),
};
const ScratchCardComponent = () => (
  <ScratchCard {...settings}>Congratulations! You WON!</ScratchCard>
);

class Scratchcard extends React.Component {
  render() {
    return (
      <div className="flex flex-col gap-6 justify-center items-center overflow-y-scroll h-full">
      
        <h2 className="top-0 p-20 absolute z-0 text-6xl">hEKLOKEFDOWE</h2>
        <div className="z-50 bottom-0 top-0 absolute">
        <ScratchCardComponent />
      </div>
      </div>
    );
  }
}
export default Scratchcard;
