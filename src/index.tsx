import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import Test from "./app/test";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Test/> */}
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
