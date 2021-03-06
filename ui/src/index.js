import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./services";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/base.scss";

import "bootstrap/dist/js/bootstrap.min.js";

require("dotenv").config();



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
