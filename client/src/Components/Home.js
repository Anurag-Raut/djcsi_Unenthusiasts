import React from "react";
import { Categories } from "./Home/Categories";
import { Navbar } from "./Home/Navbar";

export const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll">
      <div>
        <Navbar />
      </div>
      <div className="mt-5">
        <Categories />
      </div>
    </div>
  );
};
