import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5}></StarRating>
    <StarRating maxRating={10}></StarRating>
    <StarRating maxRating={10} size={24}></StarRating> */}
  </React.StrictMode>
);
