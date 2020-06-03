import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import visibilityReducer from "./visibilityReducer";

export default combineReducers({
    taskReducer,
    visibilityReducer
});