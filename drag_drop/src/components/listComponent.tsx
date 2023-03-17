import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersListQuery } from "../rtkQueryCalls/apiSlice";
import UserCard from "./UserCard";
import { addUserList } from "../actions/userActions";
interface ListComponentInterface {
  ListId: number;
}

export interface DataType {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  birth_date: string;
}

const ListComponent = ({ ListId }: ListComponentInterface) => {
  const { data, isLoading } = useGetUsersListQuery(ListId);
  const Dispatch = useDispatch();

  const userList = useSelector(
    (state: { UserReducer: Array<Array<DataType>> }) => state
  );

  useEffect(() => {
    console.log(userList)
    Dispatch(addUserList(data, ListId));
  }, [Dispatch, ListId, data, isLoading]);

  return (
    <div className="col">
      <h1 className="text-center">User List {ListId + 1}</h1>
      {/* {userList ? (
        userList[ListId].map((value: DataType, index: number) => (
          <UserCard data={value} key={index} />
        ))
      ) : (
        <h3>Loading...</h3>
      )} */}
    </div>
  );
};
export default ListComponent;
