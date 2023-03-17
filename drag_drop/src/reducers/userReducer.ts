import { DataType } from "../components/listComponent";
import * as constants from "../constants/constants";

const initialState: Array<Array<DataType>> = [[], [], [], []];

const UserReducer = (
  state = initialState,
  action: { type: string; payload: any; listId: number; pos: number }
) => {
  const _state = state;
  
  switch (action.type) {
    case constants.INSERTALL:
      _state[action.listId] = action.payload;
      return _state;
    case constants.INSERT:
      _state[action.listId] = [
        ..._state[action.listId].slice(0, action.pos),
        action.payload,
        ..._state[action.listId].slice(action.pos + 1),
      ];
      return _state;
    case constants.DELETE:
      const list: DataType[] = [];
      _state[action.listId] = _state[action.listId].reduce(
        (prevValue, currentValue) => {
          if (currentValue.id !== action.payload.id)
            prevValue.push(currentValue);
          return prevValue;
        },
        list
      );
      return _state;

    default:
      return state;
  }
};

export default UserReducer;
