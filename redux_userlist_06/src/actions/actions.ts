import { UserDetails } from "../interfaces";
import * as constants from "../constants/constants";

export const insertUser = (payload: UserDetails) => ({
  type: constants.CREATE,
  payload: payload,
});

export const addUserList = (payload: UserDetails[]) => ({
  type: constants.INSERTALL,
  payload: payload,
});

export const updateUser = (payload: UserDetails) => ({
  type: constants.UPDATE,
  payload: payload,
});

export const removeUser = (payload: UserDetails) => ({
  type: constants.DELETE,
  payload: payload,
});
