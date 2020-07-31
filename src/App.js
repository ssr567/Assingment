import React from "react";
import "./App.css";
import Name from "./Name";
import Clip from "./Clip";
import { data } from "./data";

const length = data.length;

function App() {
  const [idx, setIdx] = React.useState(0);
  const [videoCard, setVideoCard] = React.useState(data[0]);
  const [moveRight, setMoveRight] = React.useState(false);
  const [startingX, setStartingX] = React.useState(0);
  const [startingY, setStartingY] = React.useState(0);

  const p1Start = (e) => {
    setStartingX(e.touches[0].clientX);
    setStartingY(e.touches[0].clientY);
  };

  const p1End = (e) => {
    const changeX = startingX - e.changedTouches[0].clientX;
    const changeY = startingY - e.changedTouches[0].clientY;
    const thresholdX = window.screen.width / 3;
    const thresholdY = window.screen.height / 4;

    if (changeY > thresholdY) {
      if (idx === length) {
        return;
      }
      setIdx(idx + 1);
      setVideoCard(data[idx]);
    } else if (changeY < -thresholdY) {
      if (idx === 0) {
        return;
      }
      setIdx(idx - 1);
      setVideoCard(data[idx]);
    } else if (changeX < thresholdX) {
      return;
    } else if (changeX > thresholdX) {
      setMoveRight(true);
    } else {
      return;
    }
  };

  return (
    <div
      className="App"
      onTouchStart={(e) => p1Start(e)}
      onTouchEnd={(e) => p1End(e)}
    >
      {moveRight ? (
        <Name moveRight={setMoveRight} name={videoCard.channel.user.name} />
      ) : (
        <Clip url={videoCard.video.originalUrl} id={videoCard.id} />
      )}
    </div>
  );
}

export default App;
