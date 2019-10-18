import {ADD_TASK, FETCH_NEW_STATE, FETCH_TASK_SUCCESS} from "../actions/actionTypes";
import moment from "moment";

const initialState = {
    tasks: [{
        id: '192938',
        taskTitle: 'Home',
        taskBody: 'Clean the room!',
        date: moment(Date.now()).format('ll'),
        isFavorite: true
    }],
    task: null
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            };
        case FETCH_NEW_STATE:
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
