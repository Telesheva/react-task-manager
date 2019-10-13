import {ADD_TASK, ADD_TO_FAVORITES, FETCH_NEW_STATE, REMOVE_FROM_FAVORITES} from "../actions/actionTypes";
import moment from "moment";

const initialState = {
    tasks: [{
        id: '192938',
        taskTitle: 'Home',
        task: 'Clean the room!',
        date: moment(Date.now()).format('ll'),
        isFavorite: true
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
