import React, { useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
  const [status, setStatus] = useState();
  let upHr = 0;
  let upMin = 0;
  let upSec = 0;
  let upMilli = 0;

  const start = () => {
    setStatus(setInterval(myfun, 10));
  };

  const pause = () => {
    clearInterval(status);
  };

  const reset = () => {
    setTime({ hr: 0, min: 0, sec: 0, milli: 0 });
  };
  const myfun = () => {
    if (upMilli === 100) {
      upMilli = 0;
      upSec++;
    }
    if (upSec === 60) {
      upSec = 0;
      upMin++;
    }
    if (upMin === 60) {
      upMin = 0;
      upHr++;
    }
    upMilli++;
    return setTime({ hr: upHr, min: upMin, sec: upSec, milli: upMilli });
  };
  return (
    <div className="container">
      <h1>
        {time.hr + " : " + time.min + " : " + time.sec + " : " + time.milli}
      </h1>
      <div className="buttons">
        <button className="start" onClick={start}>
          start
        </button>
        <button className="stop" onClick={pause}>
          pause
        </button>
        <button className="reset" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
