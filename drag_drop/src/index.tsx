import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { UsersApi } from "./rtkQueryCalls/apiSlice";
import { Provider } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const store = createStore(rootReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={UsersApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
