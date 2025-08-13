import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
