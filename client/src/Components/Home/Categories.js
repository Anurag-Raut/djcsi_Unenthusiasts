import React from "react";
import { CategoryButton } from "./CategoryButton";
import { EventsButton } from "./EventsButton";
export const Categories = () => {
  const categories = [
    {
      name: "Cold Coffee",
      image:
        "https://th.bing.com/th/id/OIP._amtVrnWIHD-wQXNk2kxKQHaLH?pid=ImgDet&rs=1",
    },
    {
      name: "Hot Coffee",
      image:
        "https://th.bing.com/th/id/OIP.8-Ig7TVeTwGumJe1qemsxgHaJ4?pid=ImgDet&rs=1",
    },
    {
      name: "Coffee Coolers",
      image:
        "https://th.bing.com/th/id/OIP.c5HOvi_Bl2_ch9kotal2lwDwEE?pid=ImgDet&rs=1",
    },
    {
      name: "Not Coffee",
      image:
        "https://th.bing.com/th/id/OIP.LHODe3sF8n66ImnQooytDQHaJw?pid=ImgDet&rs=1",
    },
    {
      name: "Manual Brew",
      image:
        "https://th.bing.com/th/id/OIP.-iZ2sdF7QiU5d49enZceSAAAAA?pid=ImgDet&rs=1",
    },
  ];
  return (
    <div className="flex flex-col gap-3 bg-[#AB877D] rounded-md">
      <p className="text-2xl font-bold p-2 mx-auto text-[#F2EAF2]">
        Categories
      </p>
      <div className=" flex flex-row snap-x snap-mandatory pb-10 scroll-smooth overflow-x-hidden flex-wrap scrollbar-hide md:h-full md:p-5 items-center">
        {categories.map((category) => {
          return (
            <div className="bg-cover p-3 snap-center w-1/2 md:w-1/3  h-full shadow-md rounded-none flex-shrink-0">
              <CategoryButton
                name={category.name}
                image={category.image}
              ></CategoryButton>
            </div>
          );
        })}
      </div>
      

    </div>
  );
};
