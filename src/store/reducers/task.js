import {ADD_TASK, CHANGE_TITLE, FETCH_NEW_STATE} from "../actions/actionTypes";
import moment from "moment";

const initialState = {
    tasks: [{
        id: '192938',
        taskTitle: 'Home',
        task: 'Clean the room!',
        date: moment(Date.now()).format('ll')
    }]
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
        default:
            return state;
    }
}
