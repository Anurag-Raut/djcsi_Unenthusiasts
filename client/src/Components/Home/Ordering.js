import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { Card } from "./Card";

export const Ordering = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-2 text-lg">
        <IoChevronBackOutline />
        <p>Order</p>
        <AiOutlineSearch />
      </div>
      <div>
        <div>
          <p className="text-2xl font-bold p-2">Categories</p>
          <p className="text-sm p-2">Select a category to start your order</p>
        </div>
        <div className="flex flex-wrap">
          <div className="basis-full md:basis-1/2 lg:basis-1/3">
            <Card />
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3">
            <Card />
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3">
            <Card />
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3">
            <Card />
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3">
            <Card />
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3">
            <Card />
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
