import React,{useState,useEffect} from "react";
import { EventsForm } from "./AdminDashboard/EventsForm";
import { SchemeForm } from "./AdminDashboard/SchemeForm";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import {FcComboChart} from "react-icons/fc";
import {MdAttachMoney} from "react-icons/md";
import { app, database, storage } from "../firebaseConfig";
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

export const AdminDashboard = () => {
  const [events, setevents] = useState([])
  const [scheme, setscheme] = useState([])

  useEffect(() => {
    getEvent();
    getScheme()
  }, [])

  const getEvent=async()=>{
    const collectionRef = collection(database, "events");
    onSnapshot(collectionRef, (hacklist) => {
      setevents(hacklist.docs);
    })
  }
  const getScheme=async()=>{
    const collectionRef = collection(database, "scheme");
    onSnapshot(collectionRef, (hacklist) => {
      setscheme(hacklist.docs);
    })
  }
  

  return (
    <div className="h-screen w-screen flex">
      {/* sidebar */}
      {/* <div className="basis-1/6 p-5">
        <div className="w-full h-full rounded-md shadow-md shadow-slate-600">
          <div className="p-3 pt-4">
            <img src="/ettarra.png" alt="" />
          </div>

          <div className="w-full p-3  pt-10 flex flex-col gap-1">
            <button className="w-full h-12 rounded-md shadow-md border shadow-gray-700 flex items-center justify-center"><SchemeForm/></button>
            <button className="w-full h-12 rounded-md shadow-md border shadow-gray-700 flex items-center justify-center">abc</button>
            <button className="w-full h-12 rounded-md shadow-md border shadow-gray-700 flex items-center justify-center">abc</button>
            <button className="w-full h-12 rounded-md shadow-md border shadow-gray-700 flex items-center justify-center">abc</button>
          </div>

          <div></div>
        </div>
      </div> */}

      {/* main */}
      <div className="w-full h-full p-5 flex flex-col bg-white">
        {/* Navbar */}
        <div className="w-full p-3 flex justify-between items-center shadow-md rounded-md shadow-gray-700">
          {/* logo */}
          <div className="w-[227px]">
            <img src="/ettarra.png" alt="" />
          </div>

          {/* user data and log out button */}
          <div className="flex gap-2">
            <CgProfile className="text-3xl" />
            <MdLogout className="text-3xl" />
          </div>
        </div>

        {/* Main */}
        <div className="flex h-full flex-col pt-5 gap-10">
          {/* 4 cards */}
          <div className="flex flex-nowrap gap-10">
            <div className="h-40 basis-1/4 shadow-md shadow-gray-700 rounded flex items-center justify-center gap-5">
              <div className="p-5 bg-blue-100 rounded-full">
                <FaUsers className="text-3xl text-blue-700" />
              </div>
              <div>
                <p className="text-3xl">62</p>
                <p className="text-2xl font-semibold">Total Users</p>
              </div>
            </div>
            <div className="h-40 basis-1/4 shadow-md shadow-gray-700 rounded flex items-center justify-center gap-5">
              <div className="p-5 bg-green-100 rounded-full">
                <AiOutlineStock className="text-3xl text-green-700" />
              </div>
              <div>
                <p className="text-3xl">+7%</p>
                <p className="text-2xl font-semibold">User Growth</p>
              </div>
            </div>
            <div className="h-40 basis-1/4 shadow-md shadow-gray-700 rounded flex items-center justify-center gap-5">
              <div className="p-5 bg-green-100 rounded-full">
                <FcComboChart className="text-3xl text-green-700" />
              </div>
              <div>
                <p className="text-3xl">+9%</p>
                <p className="text-2xl font-semibold">Revenue Growth</p>
              </div>
            </div>
            <div className="h-40 basis-1/4 shadow-md shadow-gray-700 rounded flex items-center justify-center gap-5">
              <div className="p-5 bg-green-100 rounded-full">
                <MdAttachMoney className="text-3xl text-green-700" />
              </div>
              <div>
                <p className="text-3xl">9000</p>
                <p className="text-2xl font-semibold">Total Revenue</p>
              </div>
            </div>
          </div>

          {/* 2 graphs */}
          <div className="h-full w-full flex gap-10">
            <div className="h-full basis-1/2 flex flex-col rounded shadow-md shadow-gray-700 ">
              <p className="p-3 flex-none text-lg font-semibold">Schemes</p>
              <div className="grow w-full">
                <table className="w-full">
                  <thead className="w-full border">
                    <tr>

                    <th>Coupon code</th>
                      <th>Scheme on Reaching AMT</th>
                      <th>Discount</th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {scheme.map((item) => {
                      const item1=item.data()
            return (
              <tr className="">
                      <td className="px-5 py-3">{item.id}</td>
                      <td className="px-5 py-3"> ₹ {item1.xamt}</td>
                      <td className="px-5 py-3">{item1.discount} % discount</td>
              </tr>
            );
          }, [])}
                    
                  </tbody>
                </table>
              </div>
              <button className="flex-none p-5 border">
                <SchemeForm />
              </button>
            </div>
            <div className="h-full basis-1/2 flex flex-col rounded shadow-md shadow-gray-700 ">
              <p className="p-3 flex-none text-lg font-semibold">Events</p>
              <div className="grow w-full">
                <table className="w-full">
                  <thead className="w-full border">
                    <tr>
                      <th>Events Name</th>
                      <th>Events Date and Time</th>
                      <th>Events Description</th>
                      <th>Points Reqd</th>
                    </tr>
                  </thead>
                  <tbody className="w-full ">
                    {events.map((item) => {
                      const item1=item.data()
            return (
              <tr className="">
                      <td className="px-5 py-3">{item1.name}</td>
                      <td className="px-5 py-3">{item1.date}</td>
                      <td className="px-5 py-3">{item1.desc}</td>
                      <td className="px-5 py-3">{item1.points}</td>
              </tr>
            );
          }, [])}
                  </tbody>
                </table>
              </div>
              <button className="flex-none p-5 border">
                <EventsForm />
              </button>
            </div>
            {/* <div className="h-full basis-1/2 rounded shadow-md shadow-gray-700 ">
              <p className="p-3 text-lg font-semibold">Statistics</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
