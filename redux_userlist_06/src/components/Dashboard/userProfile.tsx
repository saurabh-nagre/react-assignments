import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { UserDetails } from "../../interfaces";

import "./styles.css";

const UserProfile = (props: any) => {
  const details: UserDetails = props.data;
  const [visible,setVisible] = useState(false);
  const handleTouch = () => {
    setVisible(true)
  };

  const handleTouchCancel = ()=>{
    setVisible(false)
  }
  return (
    <Link to="/updateUser" state={{ data: props.data }}>
      <div
        className="profile"
        onMouseOver={()=>handleTouch()}
        onMouseOut = {()=>handleTouchCancel()}
        onTouchMove={() => handleTouch()}
        onTouchCancel={() => handleTouchCancel()}
      >
        <img src={details.avatar} className="image" alt="user avatar" />

        <h4>{details.first_name + " " + details.last_name}</h4>

        <a hidden={!visible} href={"emailTo:" + details.email} >{details.email}</a>
      </div>
    </Link>
  );
};

export default UserProfile;
