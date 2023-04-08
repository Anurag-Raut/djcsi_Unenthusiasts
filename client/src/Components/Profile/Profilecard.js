import React, { useState } from "react";

export const ProfileCard = () => {
  return (
    <div>
      <div class="w-[70vw] p-2  border rounded-lg shadow-lg bg-[#ab877d]">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
            Title
          </h5>
        </a>
        <p class="mb-3 font-normal  text-white">Description</p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-[#563300]  rounded-lg  focus:ring-4 focus:outline-none text-[#e2c2aa] hover:text-[#563300] hover:bg-[#e2c2aa]"
        >
          Read more
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
