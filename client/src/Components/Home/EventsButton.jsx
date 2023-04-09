import React from "react";

export const EventsButton = ({item}) => {
  return (
    <button className="flex rounded-lg bg-[#000] ">
      <img src="" className="w-48 h-auto " alt="" />
      <div className="p-8 text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            {item.desc}
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">{item.name}</div>
          <div class="text-slate-700 dark:text-slate-500">
            {item.date}
          </div>
        </figcaption>
      </div>
    </button>
  );
};
