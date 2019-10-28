import {
    ADD_TASK_ERROR,
    ADD_TASK_SUCCESS,
    EDIT_TASK_ERROR,
    FETCH_DELETE_ERROR,
    FETCH_TASK_ERROR,
    FETCH_TASK_SUCCESS,
    FETCH_TASKS_ERROR,
    FETCH_TASKS_START,
    FETCH_TASKS_SUCCESS,
    TOGGLE_FAVORITES_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    tasks: [],
    task: null,
    loading: false,
    error: ''
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            };
        case ADD_TASK_ERROR:
            return {
                ...state, loading: false, error: action.error
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
        case FETCH_DELETE_ERROR:
            return {
                ...state, loading: false, error: action.error
            };
        case TOGGLE_FAVORITES_SUCCESS:
            return {
                ...state, tasks: action.newTasks
            };
        case EDIT_TASK_ERROR:
            return {
                ...state, loading: false, error: action.error
            };
        case FETCH_TASK_SUCCESS:
            return {
                ...state, task: action.currentTask
            };
        case FETCH_TASK_ERROR:
            return {
                ...state, loading: false, error: action.error
            };
        default:
            return state;
    }
}
