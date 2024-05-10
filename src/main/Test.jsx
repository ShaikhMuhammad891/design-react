// JavaScript code using React hooks
import React, { useState, useEffect } from "react";

const Test = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(value > 100 ? 100 : value < 0 ? 0 : value);
  }, [value]);

  const handleMinusClick = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress - 1;
      return newProgress < 0 ? 0 : newProgress;
    });
  };

  const handlePlusClick = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress + 1;
      return newProgress > 100 ? 100 : newProgress;
    });
  };

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="progress-value">{progress}</div>
      <button
        id="minus-button"
        onClick={handleMinusClick}
        disabled={progress <= 0}
      >
        -
      </button>
      <button
        id="plus-button"
        onClick={handlePlusClick}
        disabled={progress >= 100}
      >
        +
      </button>
    </div>
  );
};

export default Test;
