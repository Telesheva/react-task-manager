import {ADD_TASK} from './actionTypes';

export function addTask(task) {
    return {
        type: ADD_TASK,
        task
    }
}