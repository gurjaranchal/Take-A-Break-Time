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

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{time} seconds</p>
      <button onClick={toggleRunning}>
        {running ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
