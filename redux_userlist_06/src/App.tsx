import React, { useState } from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


import withLoading from "./components/Dashboard/withLoading";
import GetList from "./components/Dashboard/getList";

import { addUserList } from "../src/actions/actions";
import { UserDetails } from "./interfaces";

import "./App.css";

const ListWithLoading = withLoading(GetList);

function App() {
  const usersState: UserDetails[] = useSelector(
    (state: any) => state.UserReducer
  );
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    if (usersState.length === 0) {
      axios
        .get("https://reqres.in/api/users?page=1")
        .then((value) => {
          dispatch(addUserList(value.data.data));
          setIsLoading(false);
        })
        .catch((reason) => {
          console.log(reason);
        });

      axios
        .get("https://reqres.in/api/users?page=2")
        .then((value) => {
          dispatch(addUserList(value.data.data));
          setIsLoading(false);
        })
        .catch((reason) => {
          console.log(reason);
        });
    }
    else setIsLoading(false)
  }, []);


  return (
    <div className="App">
      <h1>Welcome to User List Management</h1>

      <ListWithLoading isLoading={isLoading}/>
    </div>
  );
}

export default App;
