import { UserDetails } from "../interfaces";
import * as constants from "../constants/constants";
const initialState: Array<UserDetails> = [];

const UserReducer = (state = initialState, action:{type:string,payload:any}) => {
  switch (action.type) {
    case constants.CREATE:
      state.push(action.payload);
      return state
    case constants.INSERTALL:
      return state.concat(action.payload)
      
    case constants.DELETE:
        const userArray: Array<UserDetails> = [];
        return state.reduce((prevValue, currentValue)=>{
            if(currentValue.id!==action.payload.id)
            prevValue.push(currentValue)
            return prevValue;
        },userArray);   

    case constants.UPDATE:
        state.forEach((value,index)=>{
            if(value.id===action.payload.id){
                state[index] = action.payload
            }
        })
        return state
    default : return state
  }
};

export default UserReducer;