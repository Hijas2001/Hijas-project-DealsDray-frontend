// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import './styles/tailwind.css'; // Path to your Tailwind CSS file

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
  //   <React.StrictMode>
  //     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();

// index.js or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css'; // Path to your Tailwind CSS file
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

