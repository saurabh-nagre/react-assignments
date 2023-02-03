import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import UserProfile from "./userProfile";

import { UserDetails } from "../../interfaces";
import * as constants from "../../constants/constants";

import "./styles.css";

const GetList = () => {
  
  const usersState: UserDetails[] = useSelector(
    (state: any) => state.UserReducer
  );

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