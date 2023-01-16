import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

  // sets the style of the background image
  const backgroundStyle = {
    background: 'linear-gradient(217deg, rgba(0,0,0,.8), rgba(0,0,0,0) 70.71%), linear-gradient(127deg, rgba(69, 66, 66,.8), rgba(69, 66, 66,0) 70.71%), linear-gradient(336deg, rgba(99, 99, 99,.8), rgba(99, 99, 99,0) 70.71%)',
    height: 'auto',
    width: 'auto',
  };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
       <div style={ backgroundStyle }>
      <App />
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
