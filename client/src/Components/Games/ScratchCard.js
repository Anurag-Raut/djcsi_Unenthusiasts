import React from "react";
import ScratchCard from "react-scratchcard";

import cardImage from "./stractch.jpg";

const settings = {
  width: 640,
  height: 480,
  image: cardImage,
  finishPercent: 50,
  onComplete: () => console.log("The card is now clear!"),
};
const ScratchCardComponent = () => (
  <ScratchCard {...settings}>Congratulations! You WON!</ScratchCard>
);

class Scratchcard extends React.Component {
  render() {
    return (
      <div>
        <ScratchCardComponent />
      </div>
    );
  }
}
export default Scratchcard;
