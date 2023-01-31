import { Link } from "react-router-dom";

import { UserDetails } from "../../interfaces";

import "./styles.css";

const UserProfile = (props: any)=> {
  const details: UserDetails = props.data;

  return (
    <Link to="/updateUser" state={{data:props.data}}>
      <div className="profile">
        <img src={details.avatar} className="image" alt="user avatar" />

        <h4>{details.first_name + " " + details.last_name}</h4>
      </div>
    </Link>
  );
}

export default UserProfile;