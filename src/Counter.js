// src/Counter.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';
import './Counter.css';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-heading">Counter: {count}</h1>
      <div className="counter-buttons">
        <button className="counter-button" onClick={() => dispatch(increment())}>Increment</button>
        <button className="counter-button" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
