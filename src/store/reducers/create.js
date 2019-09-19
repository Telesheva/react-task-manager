import {ADD_TASK} from "../actions/actionTypes";

const initialState = {
    tasks:
        [
            {
                id: 1,
                taskTitle: 'Home',
                task: 'Clean the room because quests will come tomorrow! It is important!'
            }
        ]
};

export default function createReducer(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            };
        default:
            return state;
    }
}

