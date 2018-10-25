import ActionsTypes from "../constants/constant";

const INITIAL_STATE = {
    tasks: []
}

export default (states = INITIAL_STATE, action)=> {
    switch(action.type){
        case ActionsTypes.UPDATETASKS:
            return({
                ...states,
                tasks:action.payload
            })
        default:
            return states
    }
}