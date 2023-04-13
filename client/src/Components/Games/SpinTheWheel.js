import React, { useState,useEffect } from "react";
import WheelComponent from "react-wheel-of-prizes";
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
  increment,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";
import { useNavigate } from "react-router";

const options = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
  "Option 7",
];

const SpinWheel = () => {
  const [store,setstore]=useState([]);
  const nav=useNavigate()
  const auth = getAuth();
  const user = auth.currentUser;
  const [points, setpoints] = useState(0)
  const [wheel, setwheel] = useState(true)
  const segments = [
    "won 150 points",
    "won 70 points",
    "won 10 points",
    "try again later",
    "won 30 points",
    "scratch card",
    "won 50 points",
    "won 100 points",
  ];
  const segColors = [
    "#563300",
    "#6d756e",
    "#ab877d",
    "#e2c2aa",
    "#f2eae2",
    "#dead84",
    "#dcb9a3",
  ];
  const onFinished = (winner) => {
    switch (winner) {
      case "won 150 points":
        setpoints(150)
          updateDoc(doc(database, "users", user.uid), {
            points:increment(150)
            
          });
        break;
      case "won 70 points":
        setpoints(70)
          updateDoc(doc(database, "users", user.uid), {
            points:increment(70)
          });
        alert("Congratulations, you won 70 points!");
        
        break;
      case "won 10 points":
        setpoints(10)
        updateDoc(doc(database, "users", user.uid), {
          points:increment(10)
        });
        alert("Congratulations, you won 10 points!");
        break;
      case "try again later":
        alert("Sorry, please try again later.");
        break;
      case "won 30 points":
        setpoints(30)
        updateDoc(doc(database, "users", user.uid), {
          points:increment(30)
        });
        alert("Congratulations, you won 30 points!");
        break;
      case "scratch card":
        alert("Congratulations, you won a scratch card!");
        nav("/scratch")

        break;
      case "won 50 points":
        setpoints(50)
        updateDoc(doc(database, "users", user.uid), {
          points:increment(50)
        });
        alert("Congratulations, you won 50 points!");
        break;
      case "won 100 points":
        setpoints(100)
        updateDoc(doc(database, "users", user.uid), {
          points:increment(100)
        });
        alert("Congratulations, you won 100 points!");
        break;
      default:
        alert("Unexpected winner:", winner);
    }
  };
  async function getuser(){
    const ref=doc(database,"users",user.uid)
    const docSnap = await getDoc(ref);
    setstore(docSnap.data());
    
}
useEffect(()=>{
  getuser();
  
   
},[])
  

  return (
      <div className="flex flex-col w-screen h-screen items-center">
        <div className="font-bold text-xl mb-12 mt-20">
          Spin the wheel to test your fortune
        </div>
        {store.points+points}
        <div className="ms-[21vw]">
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="black"
          buttonText="Spin"
          isOnlyOnce={true}
          size={300}
          upDuration={500}
          downDuration={600}
          fontFamily="Arial"
        />
        </div>
        

      </div>
  );
};

export default SpinWheel;
