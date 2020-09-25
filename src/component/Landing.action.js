import {GET_API_DATA, DELETE_API_DATA} from "./Landing.types";

export const getApiData = () =>{
    return {
        type:GET_API_DATA,
    }
}

export const deleteApiData = (id) =>{
    return {
        type:DELETE_API_DATA,
        id: id
    }
}