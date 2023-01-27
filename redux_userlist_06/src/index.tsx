import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CreateUsers from "./components/createUser";
import UpdateUsers from "./components/updateUsers";
import rootReducer from "./reducers/rootReducer";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import GetList from "./components/Dashboard/getList";

const store = createStore(rootReducer);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1 className="App">You reached to wrong URL</h1>,
    children: [
      {
        index: true,
        path: "getList",
        element: <GetList />,
      },
    ],
  },
  {
    path: "createUser",
    element: <CreateUsers />,
  },
  {
    path: "updateUser",
    element: <UpdateUsers />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
