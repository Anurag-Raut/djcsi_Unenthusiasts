import React from "react";
import { Categories } from "./Home/Categories";
import { Events } from "./Home/Events";
import { Navbar } from "./Home/Navbar";
import { People } from "./Home/People";

export const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll">
      <div>
        <Navbar />
      </div>
      <div className="mt-5">
        <Categories />
        <Events/>
        <People/>
      </div>
    </div>
  );
};
