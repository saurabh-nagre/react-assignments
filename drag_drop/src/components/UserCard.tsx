import { useEffect } from "react";
import { DataType } from "./listComponent";
import "./styles.css";


const UserCard = ({ data }: { data: DataType }) => {
  
  const handleDragStart = ()=>{
    console.log(data.id)
  } 
  
  return (
    <div className="row container border" draggable onDragStart={handleDragStart}>
      <img
        draggable={false}
        className="col"
        src={data.avatar}
        alt="user avatar"
      />
      <div className="col">
        <h4 className="text-sm-center">
          {data.first_name} {data.last_name}
        </h4>
        <p className="text-sm-center overflow-auto">{data.email}</p>
        <p className="text-sm-center"> birth_date : {data.birth_date}</p>
      </div>
    </div>
  );
};

export default UserCard;
