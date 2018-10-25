
import ActionsTypes from "../constants/constant";

export function changeState(tasks){
    return dispatch => {
        dispatch({type:ActionsTypes.UPDATETASKS, payload:tasks})
    }
    
}