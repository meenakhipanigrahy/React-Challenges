import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './challenges/counter/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);