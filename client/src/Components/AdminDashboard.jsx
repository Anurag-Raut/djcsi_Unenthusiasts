import React from "react";
import { SchemeForm } from "./AdminDashboard/SchemeForm";

export const AdminDashboard = () => {
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
        <div className="w-full shadow-md rounded-md shadow-gray-700">
          {/* logo */}
          <div className="w-16 h-16"></div>

          {/* user data and log out button */}
          <div className="flex flex-col gap-2">

          </div>

        </div>

        {/* Main */}
        <div className="flex h-full flex-col pt-5 gap-10">
          {/* 4 cards */}
          <div className="flex flex-nowrap gap-10">
            <div className="h-40 basis-1/4 shadow-md shadow-gray-700 rounded"></div>
            <div className="h-40 basis-1/4 shadow-md shadow-gray-700 rounded"></div>
            <div className="h-40 basis-1/4 shadow-md shadow-gray-700 rounded"></div>
            <div className="h-40 basis-1/4 shadow-md shadow-gray-700 rounded"></div>
          </div>

          {/* 2 graphs */}
          <div className="h-full w-full flex gap-10">
            <div className="h-full basis-1/4 rounded shadow-md shadow-gray-700 ">
                <p className="p-3 text-lg font-semibold">Schemes</p>
            </div>
            <div className="h-full basis-1/4 rounded shadow-md shadow-gray-700 ">
              <p>Events</p>
            </div>
            <div className="h-full basis-1/2 rounded shadow-md shadow-gray-700 ">
              <p>Statistics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
