import {ADD_TASK, FETCH_DELETE_SUCCESS} from "../actions/actionTypes";

const initialState = {
    tasks: []
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            };
        case FETCH_DELETE_SUCCESS:
            return {
              ...state, tasks: action.newTasks
            };
        default:
            return state;
    }
}
