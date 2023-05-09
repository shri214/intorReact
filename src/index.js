import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./nav";
import BodySection from "./bodySection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Nav />
      <BodySection />
    </>
  </React.StrictMode>
);
