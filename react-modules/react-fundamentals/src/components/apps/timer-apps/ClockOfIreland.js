import React, { useState, useEffect } from "react";

const ClockOfIreland = () => {
  const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
  };
  const [time, setTime] = useState(getTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      let date = getTimeString();
      setTime(date);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="section-title">React Clock</h1>
      <hr className="explanation" />
      <p>{time}</p>
      <p>Dublin, Ireland</p>
    </div>
  );
};

export default ClockOfIreland;
