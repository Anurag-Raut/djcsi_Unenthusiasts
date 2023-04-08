import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { Card } from "./Card";
import { useNavigate } from "react-router";

export const Ordering = () => {
    const navigate = useNavigate()
  const [itemsAreThere, setItemsAreThere] = React.useState(true);

  return (
    <div className="h-screen flex flex-col overflow-auto">
      <div className="flex justify-between items-center p-2 text-lg">
        <a href="/">
          {" "}
          <IoChevronBackOutline />
        </a>
        <p>Order</p>
        <AiOutlineSearch />
      </div>
      <div>
        <div>
          <p className="text-2xl font-bold p-2">Categories</p>
          <p className="text-sm p-2">Select a category to start your order</p>
        </div>
        <div className="flex h-full overflow-auto flex-col flex-nowrap">
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
      {itemsAreThere ? (
        <div className="w-screen flex justify-center absolute bottom-0 z-50 pb-3 px-3">
          <button onClick={()=>navigate("/bill")} className="rounded-full w-screen shadow-xl bg-[#563300] p-3 text-white flex justify-center">
            Bottom Bar
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
