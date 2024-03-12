import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (
  window.location.pathname === "/home-1-rtl" ||
  window.location.pathname === "/home-2-rtl" ||
  window.location.pathname === "/home-3-rtl" ||
  window.location.pathname === "/home-4-rtl" ||
  window.location.pathname === "/home-5-rtl" ||
  window.location.pathname === "/home-6-rtl"
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

reportWebVitals();
