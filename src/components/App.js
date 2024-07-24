import React, { useState } from 'react';
import './../styles/App.css';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <p className="counter-text">Button clicked {count} times</p>
      <button className="click-button" onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ClickCounter;

