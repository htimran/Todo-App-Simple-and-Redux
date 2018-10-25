import  {combineReducers}  from 'redux';
import todoreducer from './Todoreducer';

export default combineReducers({
    todoReducer: todoreducer    
});