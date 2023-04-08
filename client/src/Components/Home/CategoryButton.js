import React from "react";
import { Navigate, useNavigate } from "react-router";

export const CategoryButton = (props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(`/ordering/${props.name.toLowerCase().replace(/ +/g, "")}`);
      }}
      className="flex flex-col justify-center items-center "
    >
      <div>
        <img
          className="rounded-md border-2 border-[#563300] h-[200px] w-[200px]"
          src={props.image}
          alt={props.name}
        />
      </div>
      <div>
        <p className="font-semibold text-md  text-[#F2EAE2]">{props.name}</p>
      </div>
    </button>
  );
};
