import React from "react";

export const AdminDashboard = () => {
  return (
    <div className="h-screen w-screen flex">
      {/* sidebar */}
      <div className="basis-1/6 p-5">
        <div className="w-full h-full rounded-md shadow-md shadow-black">
          {/* logo */}
          <div></div>

          {/* links */}
          <div></div>

          {/* logout */}
          <div></div>
        </div>
      </div>

      {/* main */}
      <div className="basis-5/6 h-full p-5 flex flex-col bg-white">
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
          <div className="h-1/2 w-full flex gap-10">
            {/* line graph */}
            <div className="h-full basis-3/5 rounded shadow-md shadow-gray-700 ">

            </div>

            {/* pie chart */}
            <div className="h-full basis-2/5 rounded shadow-md shadow-gray-700 "></div>
          </div>

          {/* 2 tables */}
          <div className="h-1/2 w-full flex gap-10">
            {/* table 1 orders */}
            <div className="h-full basis-1/2 rounded shadow-md shadow-gray-700 "></div>

            {/* table 2  leaderboard */}
            <div className="h-full basis-1/2 rounded shadow-md shadow-gray-700 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};
