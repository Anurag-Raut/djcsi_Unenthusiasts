import React, { useState } from "react";
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
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const partRef = collection(database, "users");
  const [data, setdata] = useState({});
  const auth = getAuth();

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setdata({ ...data, ...newInput });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);

        const storageRef = ref(storage, data.email);
        updateProfile(user, {
          displayName: data.name,
        });
        setDoc(doc(database, "users", user.uid), {
          uid: user.uid,
          name: data.name,
          email: data.email,
          amount: 0,
          points: 0,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };

  return (
    <div className="w-full h-full pt-6">
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20 shadow-2xl rounded-2xl bg-[#dead84] bg-opacity-80 backdrop-blur-md drop-shadow-lg ">
        <div className="text-3xl font-mono flex font-extrabold justify-center">
          Signup
        </div>
        <form>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="email"
              onChange={(event) => handleInput(event)}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Your full name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              onChange={(event) => handleInput(event)}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              onChange={(event) => handleInput(event)}
            />
          </div>
          <button
            type="submit"
            className="shadow bg-[#563300] hover:bg-[#ab8778] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
            onClick={handleSubmit}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};
