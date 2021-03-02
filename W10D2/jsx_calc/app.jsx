import React from "react";
import ReactDOM from "react-dom";

import NewCalc from "./newCalc";

import Calculator from "./calculator";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<NewCalc />, document.getElementById("main"));
});
