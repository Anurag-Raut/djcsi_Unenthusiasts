import React, { useState, useEffect } from "react";
import { EventsForm } from "./AdminDashboard/EventsForm";
import { SchemeForm } from "./AdminDashboard/SchemeForm";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { FcComboChart } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";
import { app, database, storage } from "../firebaseConfig";
import Modal from "react-modal";

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
import { useStateContext } from "../context/ind";

export const AdminDashboard = () => {
  const [w,setw]=useState(0);
  const [data, setdata] = useState({});
  const {burnnft,connect,address}=useStateContext();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
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
  const [events, setevents] = useState([]);
  const [scheme, setscheme] = useState([]);

  useEffect(() => {
    getEvent();
    getScheme();
  }, []);

  const getEvent = async () => {
    const collectionRef = collection(database, "events");
    onSnapshot(collectionRef, (hacklist) => {
      setevents(hacklist.docs);
    });
  };
  const getScheme = async () => {
    const collectionRef = collection(database, "scheme");
    onSnapshot(collectionRef, (hacklist) => {
      setscheme(hacklist.docs);
    });
  };
  

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
                      const item1 = item.data();
                      return (
                        <tr className="">
                          <td className="px-5 py-3">{item.id}</td>
                          <td className="px-5 py-3"> ₹ {item1.xamt}</td>
                          <td className="px-5 py-3">
                            {item1.discount} % discount
                          </td>
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
              <div className="grow h-full w-full">
                <table className="w-full h-full">
                  <thead className="w-full border">
                    <tr>
                      <th>Events Name</th>
                      <th>Events Date and Time</th>
                      <th>Events Description</th>
                      <th>Points Reqd</th>
                    </tr>
                  </thead>
                  <tbody className="w-full h-full overflow-x-scroll object-contain">
                    {events.map((item) => {
                      const item1 = item.data();
                      console.log(item.id)
                      return (
                        <div>
                          <burron onClick={openModal} className="object-contain w-full flex justify-between">
                            <td className="px-5 py-3">{item1.name}</td>
                            <td className="px-5 py-3">{item1.date}</td>
                            <td className="px-5 py-3">{item1.desc}</td>
                            <td className="px-5 py-3">{item1.points}</td>
                          </burron>
                          <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                          >
                           
                            <button onClick={closeModal}></button>
                            <div className="text-xl font-bold">Burn Nfts</div>
                           
                              <div className="">
                                <label
                                  htmlFor="xamt"
                                  className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
                                >
                                 enter token no;
                                </label>
                                <input
                                  type="number"
                                  id="token"
                                  name="xamt"
                                  onChange={(e)=>setw(e.target.value)}
                                  placeholder={"Enter some amount"}
                                  required
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  
                                />
                               
                                
                              </div>

                              <div className="flex flex-row-reverse justify-around items-center p-2">
                                <button
                                  onClick={async()=>{
                                    if(!address){
                                      connect();
                                    }
                                    console.log(parseInt(w),item.id,'sddddddddddddddddddd')

                                    await burnnft(parseInt(w),item.id);

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
                                  Connect to Wallet
                                </button>
                              </div>
                           
                          </Modal>
                        </div>
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