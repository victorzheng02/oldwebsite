import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App.js";
import "./css/style.css";
import "./css/bg.css";
import "bootstrap/dist/css/bootstrap.min.css";

const loader = document.querySelector(".lds-dual-ring");
const hideLoad = () => loader.classList.add("hide-load");

setTimeout(() => {
  ReactDOM.render(<App hideLoad={hideLoad} />, document.getElementById("root"));
}, 1000);
