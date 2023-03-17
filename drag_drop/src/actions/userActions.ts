import { DataType } from "../components/listComponent";
import * as constants from "../constants/constants";

export const addUserList = (payload: DataType[], listId: number) => ({
  type: constants.INSERTALL,
  payload: payload,
  listId: listId,
  pos: 0,
});

export const removeUser = (payload: DataType, listId: number, pos: number) => ({
  type: constants.DELETE,
  payload: payload,
  listId,
  pos,
});

export const addUser = (payload: DataType, listId: number, pos: number) => ({
  type: constants.INSERT,
  payload: payload,
  listId,
  pos,
});
