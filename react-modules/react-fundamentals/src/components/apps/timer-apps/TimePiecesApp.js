import React from "react";
import TimerApp from "./TimerApp";
import ClockApp from "./ClockApp";
import StopWatchApp from "./StopWatchApp";
import ClockOfIreland from "./ClockOfIreland";

const TimePieceApp = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <TimerApp />
        <hr />
        <ClockApp />
        <hr />
        <StopWatchApp />
        <hr />
        <ClockOfIreland />
      </div>
    </div>
  );
};

export default TimePieceApp;
