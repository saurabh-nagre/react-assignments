import { UserDetails } from "../interfaces";
import * as constants from "../constants/constants"
export const insertUser = (payload:UserDetails)=>{
    console.log(payload)
    return {
        type:constants.CREATE,
        payload:payload
    }
}

export const addUserList = (payload:UserDetails[])=>{
    return {
        type:constants.INSERTALL,
        payload:payload
    }
}

export const updateUser = (payload:UserDetails)=>{
    return {
        type:constants.UPDATE,
        payload:payload
    }
}

export const removeUser = (payload:UserDetails)=>{
    return {
        type:constants.DELETE,
        payload:payload
    }
}