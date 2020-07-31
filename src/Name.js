import React from "react";
import "./App.css";

function Name(props) {
  const [startingX, setStartingX] = React.useState(0);

  const p2Start = (e) => {
    setStartingX(e.touches[0].clientX);
  };

  const p2End = (e) => {
    const change = e.changedTouches[0].clientX - startingX;
    const threshold = window.screen.width / 3;
    if (change < threshold) {
      return;
    } else {
      props.moveRight(false);
    }
  };

  return (
    <div
      className="Name"
      onTouchStart={(e) => p2Start(e)}
      onTouchEnd={(e) => p2End(e)}
    >
      {props.name ? props.name : "Unknown Name"}
    </div>
  );
}

export default Name;
