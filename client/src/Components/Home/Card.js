import React from "react";

export const Card = () => {
  return (
    <div className="p-2">
      <div className="flex p-3 rounded-md shadow hover:shadow-md">
        <div className="h-24 w-24">
          <img src="/logo192.png" className="h-24 w-24 rounded-full" alt="logo" />
        </div>
        <div className="flex flex-col justify-center items-start gap-1 ml-4">
          <img src="/veg.svg" className="" alt="veg" />
          <p className="text-sm font-semibold">Coffee Name</p>
          <p className="text-sm font-mono font-semibold text-gray-500">
            Size and kcal
          </p>
          <p className="text-xs font-mono font-semibold">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </p>
          <div className="flex items-center justify-between py-3 pr-2 w-full">
            <p className="">₹ XXX.XX</p>
            <button className="text-white bg-[#563300] p-2 px-5 rounded-full">Add Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};
