import React, { useState, useEffect } from "react";
import { Navbar } from "./Home/Navbar";
import { ProfileCard } from "./Profile/Profilecard";

function Profile() {
  return (
    <div className="h-screen overflow-y-scroll w-full">
      <div>
        <Navbar />
      </div>
      <div className="w-[50vw] mt-10 flex flex-col gap-3 justify-center text-xl text-center mx-auto rounded-md bg-[#DEAD84] p-5">
        <div className="flex flex-row justify-between">
          <h1 className="font-thin">Username</h1>
          <h1 className="font-thin">Email</h1>
        </div>
        <hr className="border-[#563300]" />
        <h1 className="font-thin">Points</h1>
      </div>
      <h3 className="mt-10 text-[#563300] flex justify-center text-center mx-auto">
        Your Coupons
      </h3>
      <div className="mt-10 flex flex-col gap-2 justify-center items-center text-center mx-auto">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
}

export default Profile;
