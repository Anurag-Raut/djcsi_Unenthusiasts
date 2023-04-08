import React from "react";
import { CategoryButton } from "./CategoryButton";

export const Categories = () => {
  const categories = [
    {
      name: "Cold Coffee",
      image: "/logo192.png",
    },
    {
      name: "Hot Coffee",
      image: "/logo192.png",
    },
    {
      name: "Coffee Coolers",
      image: "/logo192.png",
    },
    {
      name: "Not Coffee",
      image: "/logo192.png",
    },
    {
      name: "Manual Brew",
      image: "/logo192.png",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <p className="text-2xl font-bold p-2">Categories</p>
      <div className="flex flex-wrap">
        {categories.map((category) => {
          return (
            <div className="basis-1/3 md:basis-1/5 p-2">
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
