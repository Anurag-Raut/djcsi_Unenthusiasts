import React from "react";

export const EventsButton = () => {
  return (
    <button className="flex rounded-lg bg-[#000] ">
      <img src="" className="w-48 h-auto " alt="" />
      <div className="p-8 text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.” "event description"
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">Event Date</div>
          <div class="text-slate-700 dark:text-slate-500">
            Event Location
          </div>
        </figcaption>
      </div>
    </button>
  );
};
