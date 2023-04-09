import React, { useState, useEffect } from "react";
import { Row } from "./Bill/Row";
import { app, database, storage } from '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { collection, addDoc, getDocs, doc, updateDoc,getDoc, deleteDoc, setDoc, onSnapshot, query, where, arrayUnion, arrayRemove } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from '@firebase/util'
import { Navigate, useNavigate } from "react-router";

export const Bill = () => {
  const [items, setitems] = useState([])
  const nav=useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const [billItems, setbillItems] = useState([])

  useEffect(() => {
    getCartitems();
  }, [])

  const getCartitems = async() => {
    
    const docRef = doc(database, "users", user.uid);
    const docSnapshot = await getDoc(docRef);
    console.log(docSnapshot.data().cart);
    setbillItems(docSnapshot.data());

    // for(const item in billItems) {
    //   console.log(item + ": " + billItems[item].quantity)
    //   items.push(item)
    // }

    // (items)

    const items1=(Object.entries(docSnapshot.data().cart).map(([name, {quantity,price}]) => ({name, quantity,price})));
    console.log(items1);
    setitems(items1)
    
  }


  // const billItems = [
  //   {
  //     id: 1,
  //     name: "Coffee1",
  //     price: 250,
  //     quantity: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "Coffee2",
  //     price: 200,
  //     quantity: 2,
  //   },

  //   {
  //     id: 3,
  //     name: "Coffee3",
  //     price: 200,
  //     quantity: 4,
  //   },
  // ];
  const total = items.reduce(
    (acc, billItem) => acc + billItem.price * billItem.quantity,
    0
  );


  return (
    <div className="flex min-h-screen flex-col justify-center items-center gap-5">
      <div className="flex flex-col gap-3">
        <h1 className="px-5 pb-5 w-screen font-semibold font text-3xl"><img src="/ettarra.png" className="w-[226.77px]" alt="" /></h1>
        <div className="px-5 w-screen">
          <div className="bg-white shadow-xl rounded-xl">
            
            {
            items.map((billItem) => (
              
              <Row
                name={billItem.name}
                quantity={billItem.quantity}
                price={billItem.price}
              />
            ))}
            

            
            <div className="flex w-full justify-between items-center">
              <p className="font-semibold text-gray-600 border-y w-full p-3">
                + Add more items
              </p>
            </div>
            <div className="flex w-full justify-between items-center">
              <p className="font-semibold text-gray-600 w-full p-3">
                Add cooking instructions
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* coupons below */}
      <div className="flex flex-col gap-3">
        <h1 className="px-5 w-screen font-semibold font text-base">
          Offers & Benefits
        </h1>
        <div className="px-5 w-screen">
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex w-full justify-center items-center">
              <button onClick={()=>nav("/coupons")} className="font-semibold text-gray-600 p-3">
                View coupons {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* total bill below */}
      <div className="flex flex-col gap-3">
        <h1 className="px-5 w-screen font-semibold font text-base">Bill Details</h1>
        <div className="px-5 w-screen">
          <div className="bg-white shadow-xl p-3 rounded-xl">
            <div className="flex w-full justify-between border-b-2 border-gray-300 border-dotted items-center">
              <p className="font-semibold text-gray-600  w-full p-3">
                Item Total
              </p>
              <p className="p-3">
                ₹{total}
              </p>
            </div>
            <div className="flex w-full justify-between border-b-2 border-gray-300 border-dotted items-center">
              <p className="font-semibold text-gray-600  w-full p-3">
                Govt Taxes & Other Charges
              </p>
              <p className="p-3">
                ₹{total / 10}
              </p>
            </div>
            <div className="flex w-full justify-between  items-center">
              <p className="font-bold text-black  w-full p-3">
                To Pay
              </p>
              <p className="p-3">
                ₹{total + total / 10}
              </p>
            </div>
          </div>
          <button>ngfhjbjkk</button>
        </div>
      </div>
    </div>
  );
};
