import React, { useState, useEffect } from "react";
import { Navbar } from "./Home/Navbar";

function Profile() {
  return (
    <div className="h-screen overflow-y-scroll w-full">
      <div>
        <Navbar />
      </div>
      <div className="mt-6 ms-3">
        <h1 className="text-3xl font-thin">Username</h1>
      </div>
    </div>
  );
}

export default Profile;
