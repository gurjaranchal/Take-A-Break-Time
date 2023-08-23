// Stopwatch.js
import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  const toggleRunning = () => {
    setRunning(prevRunning => !prevRunning);
  };

  const resetTimer = () => {
    setTime(0);
    setRunning(false);
  };
  const formattedTime = new Date(time * 1000).toISOString().substr(11, 8)
  
  return (
    <center>
    <div className="container mt-5 pt-5">
      <h1>Stopwatch</h1>
      <div className="clock mt-5 "><h2>{formattedTime}</h2></div>
      <div className="btn-group mt-4 justify-content-center pt-5">
            <button className={`btn btn-${running ? 'danger' : 'success'} mx-3`}onClick={toggleRunning}>
        {running ? 'Pause' : 'Start'}</button>
            <button className="btn btn-secondary mx-5 col-sm-btn btn-secondary mx-3"onClick={resetTimer}>Reset</button>
      </div>

    </div>
    </center>
  );
};

export default Stopwatch;
