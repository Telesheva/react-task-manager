import axios from '../../axios/axios-tasks';
import {
    FETCH_TASKS_START,
    FETCH_ALL_TASKS,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_ERROR, ADD_TASK, FETCH_DELETE_SUCCESS
} from './actionTypes';

export function fetchTasks() {

}

export function fetchDeleteSuccess(newTasks) {
    return {
        type: FETCH_DELETE_SUCCESS,
        newTasks
    }
}

export function addTask(task) {
    return {
        type: ADD_TASK,
        task
    }
}

export function deleteTask(id) {
    return async (dispatch, getState) => {
        const newTasks = getState().task.tasks.filter(taskItem => taskItem.id !== id);
        dispatch(fetchDeleteSuccess(newTasks));
    }
}

