import { useState } from "react";
import { Link } from "react-router-dom";

import { UserDetails } from "../../interfaces";

import "./styles.css";

const UserProfile = (props: any) => {
  const details: UserDetails = props.data;
  const [isvisible,setisVisible] = useState(false);
  const handleTouch = () => {
    setisVisible(true)
  };

  const handleTouchCancel = ()=>{
    setisVisible(false)
  }
  return (
    <Link to="/updateUser" state={{ data: props.data }}>
      <div
        className="profile"
        onMouseOver={handleTouch}
        onMouseOut = {handleTouchCancel}
        onTouchMove={handleTouch}
        onTouchCancel={handleTouchCancel}
      >
        <img src={details.avatar} className="image" alt="user avatar" />

        <h4>{details.first_name + " " + details.last_name}</h4>

        <a hidden={!isvisible} href={"emailTo:" + details.email} >{details.email}</a>
      </div>
    </Link>
  );
};

export default UserProfile;
