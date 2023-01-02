import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Appone from './App1';
import Apptwo from './App2';
import Appthree from './App3';
import Appfour from './App4';
import Appfive from './App5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Appone /> */}
    {/* <Apptwo/> */}
    {/* <Appthree/> */}
    {/* <Appfour/> */}
    <Appfive/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
