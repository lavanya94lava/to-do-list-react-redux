import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, VISIBILE } from "./actionTypes";

let taskId = 0;

export function addTask(text) {
  return {
    type: ADD_TASK,
    id: taskId++,
    text,
  };
}

export function deleteTask(id) {
  return {
    type: REMOVE_TASK,
    id,
  };
}

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    id,
  };
}

export function visibility(filter) {
  return {
    type: VISIBILE,
    filter,
  };
}
