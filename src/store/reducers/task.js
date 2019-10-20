import {
    ADD_TASK, EDIT_TASK_SUCCESS,
    FETCH_DELETE_SUCCESS,
    FETCH_TASK_SUCCESS, FETCH_TASKS_ERROR, FETCH_TASKS_START, FETCH_TASKS_SUCCESS,
    TOGGLE_FAVORITES_SUCCESS
} from "../actions/actionTypes";
import moment from "moment";

const initialState = {
    tasks: [],
    task: null,
    loading: false
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            };
        case FETCH_TASKS_START:
            return {
                ...state, loading: true
            };
        case FETCH_TASKS_SUCCESS:
            return {
              ...state, loading: false, tasks: action.tasks
            };
        case FETCH_TASKS_ERROR:
            return {
                ...state, loading: false, error: action.error
            };
        case FETCH_DELETE_SUCCESS:
            return {
              ...state, tasks: action.newTasks
            };
        case TOGGLE_FAVORITES_SUCCESS:
            return {
                ...state, tasks: action.newTasks
            };
        case EDIT_TASK_SUCCESS:
            return {
                ...state, tasks: action.newTasks
            };
        case FETCH_TASK_SUCCESS:
            return {
                ...state, task: action.currentTask
            };
        default:
            return state;
    }
}
