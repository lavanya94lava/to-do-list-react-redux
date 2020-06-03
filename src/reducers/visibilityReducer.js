import { SHOW_ALL_TASKS, VISIBILE } from "../actions/actionTypes";


const visibilityReducer = (state = SHOW_ALL_TASKS, action) => {
    switch (action.type) {
        case VISIBILE:
            return action.filter;
        default:
            return state;
    }
};

export default visibilityReducer;