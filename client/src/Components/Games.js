import React, { useState, useEffect } from "react";
import ScratchCard from "./Games/ScratchCard";
import SpinWheel from "./Games/SpinTheWheel";

function Games() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center overflow-y-scroll h-full">
      {/* <ScratchCard /> */}
      <SpinWheel />
    </div>
  );
}

export default Games;