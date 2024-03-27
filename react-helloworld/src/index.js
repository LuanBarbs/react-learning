import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function HelloWorld() {
  return <div><Hello/></div>
};

function Hello() {
  let isBR = false;
  return (
  <span>
    {isBR ? 'Olá' : 'Hello'}
  </span>
  )
};

function World() {
  return <span>World</span>
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelloWorld/>
);