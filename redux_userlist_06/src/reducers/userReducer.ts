import { UserDetails } from "../interfaces";
import * as constants from "../constants/constants";

const initialState: Array<UserDetails> = [];

const UserReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case constants.CREATE:
      return [...state, action.payload];
    case constants.INSERTALL:
      return [...state, ...action.payload];

    case constants.DELETE:
      var list: UserDetails[] = [];
      return state.reduce((prevValue, currentValue) => {
        if (currentValue.id !== action.payload.id) prevValue.push(currentValue);
        return prevValue;
      }, list);

    case constants.UPDATE:
      var list: UserDetails[] = [];
      return state.reduce((prevValue, currentValue) => {
        if (currentValue.id === action.payload.id) prevValue.push(action.payload);
        else prevValue.push(currentValue)
        return prevValue;
      }, list);

    default:
      return state;
  }
};

export default UserReducer;
