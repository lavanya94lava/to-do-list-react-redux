import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from "../actions/actionTypes";

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      );

    case REMOVE_TASK:
      const index = parseInt(action.id);
      return state.filter((task) => task.id !== index);

    default:
      return state;
  }
};

export default taskReducer;
