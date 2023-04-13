import React, { useState } from "react";
import Modal from "react-modal";
import { useStateContext } from "../../context/ind";
import { app, database, storage } from '../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, setDoc, onSnapshot, query, where, arrayUnion, arrayRemove } from "firebase/firestore";
import { useEffect } from "react";
export const EventsButton = ({item,id}) => {
    const {connect,address,mintnft}=useStateContext();
    const auth = getAuth();
    const [points,setpoints]=useState(0);
    console.log(address);
  const user = auth.currentUser;
    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          maxWidth:"80vw"
        },
      };

      useEffect(() => {
        getName(user?.uid);
      }, []);
    
      const getName = async (id) => {
        const doc1 = doc(database, 'users', id);
        const docSnap = await getDoc(doc1);
        console.log(docSnap.data());
        setpoints(docSnap.data()?.points)
        // return docSnap.data().name;
      };
      
      
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(points);
    
  return (
    <div>
      <button onClick={openModal}>
   


    <button className="flex rounded-lg bg-[#000] ">
      <img src="" className="w-48 h-auto " alt="" />
      <div className="p-8 text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            {item.desc}
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">{item.name}</div>
          <div class="text-slate-700 dark:text-slate-500">
            {item.date}
          </div>
        </figcaption>
      </div>
    </button>

      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Events</h2>
        <button onClick={closeModal}></button>
        <div className="text-xl font-bold">Add Events</div>
      
         
    
       
          <div className="">
            <label
              htmlFor="name"
              className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
            >
              {`Do you really want to purchases for ${item?.points? item.points:0} points`}
            </label>
           
          </div>
         

          <div className="flex flex-row-reverse justify-around items-center p-2">
            <button
             onClick={async ()=>{
                // if(!address){
                //     connect();
                // }
                // if(points>=item.points){
                    await mintnft(id);
                // }
                // else{
                //     console.log("insuffiencient points");
                // }

               
              
             }}
              className="bg-green-600 p-2 text-xl rounded-md text-white w-1/4"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={connect}
              className="bg-[#d9534f] p-2 text-xl rounded-md text-white w-1/4"
            >
              Connect
            </button>
          </div>
        
      </Modal>
    </div>
    
  );
};