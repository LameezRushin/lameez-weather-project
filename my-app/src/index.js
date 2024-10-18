import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Display from "./Display";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Display />
    <footer>
        Coded by
        <a href="https://github.com/LameezRushin" target="_blank"
          >Lameez Rushin</a
        >, is open-sourced on
        <a
          href="https://github.com/LameezRushin/lameez-weather-project"
          target="_blank"
          >Github</a
        >
        and hosted by
        <a href="https://myfirstweathersite.netlify.app/" target="_blank"
          >Netlify</a
        >
      </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
