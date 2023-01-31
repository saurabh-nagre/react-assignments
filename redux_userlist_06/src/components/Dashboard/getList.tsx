import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

import { addUserList } from "../../actions/actions";
import UserProfile from "./userProfile";

import { UserDetails } from "../../interfaces";
import * as constants from "../../constants/constants";

import "./styles.css";

const GetList = () => {
  
  const usersState: UserDetails[] = useSelector(
    (state: any) => state.UserReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (usersState.length === 0) {
      axios
        .get("https://reqres.in/api/users?page=1")
        .then((value) => {
          dispatch(addUserList(value.data.data));
        })
        .catch((reason) => {
          console.log(reason);
        });

      axios
        .get("https://reqres.in/api/users?page=2")
        .then((value) => {
          dispatch(addUserList(value.data.data));
        })
        .catch((reason) => {
          console.log(reason);
        });
    }
  }, []);

  return (
    <div className="main">
      <Link to="/createUser" state={{ id: usersState.length + 1 }}>
        <div className="profile">
          <img
            src={constants.PROFILEADD}
            className="image"
            style={{ width: "150px", height: "150px" }}
            alt="user avatar"
          />
          <h4>Add New User</h4>
        </div>
      </Link>

      {usersState.map((value, index) => {
        return <UserProfile data={value} key={index} />;
      })}
    </div>
  );
};

export default GetList;