import React, { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";

const options = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
  "Option 7",
];

const SpinWheel = () => {
  const segments = [
    "next time",
    "won 70",
    "won 10",
    "next time",
    "won 2",
    "won uber pass",
    "sojao",
    "please",
  ];
  const segColors = [
    "#563300",
    "#6d756e",
    "#ab877d",
    "#e2c2aa",
    "#f2eae2",
    "#dead84",
    "#dcb9a3",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };

  return (
    <div>
      <div className="flex justify-center items-center mx-auto">
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="black"
          buttonText="Spin"
          isOnlyOnce={false}
          size={150}
          upDuration={500}
          downDuration={600}
          fontFamily="Arial"
        />
      </div>
    </div>
  );
};

export default SpinWheel;
