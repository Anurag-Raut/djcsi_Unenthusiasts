import React from "react";
import { Navigate, useNavigate } from "react-router";

export const CategoryButton = (props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(`/ordering/${props.name.toLowerCase().replace(/ +/g, "")}`);
      }}
      className="flex w-full bg-black p-3 rounded-2xl shadow-xl shadow-black hover:shadow flex-col justify-center items-center "
    >
      <div>
        <img
          className="border-2 border-[#563300] object-contain rounded-full h-[100px] md:h-[150px] md:w-[150px] bg-black w-[100px]"
          src={props.image}
          alt={props.name}
        />
      </div>
      <div className="w-full">
        <p className="font-semibold text-md w-full text-[#F2EAE2]">{props.name}</p>
      </div>
    </button>
  );
};