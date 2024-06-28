import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import store from "./store-v1";
store.dispatch({ type: "account/deposit", payload: 100 });
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
