import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

if (
  window.location.pathname === "/home-1-rtl" ||
  window.location.pathname === "/home-2-rtl" ||
  window.location.pathname === "/home-3-rtl" ||
  window.location.pathname === "/home-4-rtl" ||
  window.location.pathname === "/home-5-rtl"
) {
  require("bootstrap/dist/css/bootstrap.rtl.min.css");
  require("./index.scss");
} else {
  require("bootstrap/dist/css/bootstrap.min.css");
  require("./index.scss");
}

console.log(window.location.pathname);

const root = ReactDOM.createRoot(document.getElementById("root"));
if (
  window.location.pathname === "/home-1-rtl" ||
  window.location.pathname === "/home-2-rtl" ||
  window.location.pathname === "/home-3-rtl" ||
  window.location.pathname === "/home-4-rtl" ||
  window.location.pathname === "/home-5-rtl"
) {
  root.render(
    <React.StrictMode>
      <html dir="rtl" lang="zxx" className="no-js">
        <body>
          <App />
        </body>
      </html>
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
