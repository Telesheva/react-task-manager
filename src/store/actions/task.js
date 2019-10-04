import axios from '../../axios/axios-tasks';
import {
    FETCH_TASKS_START,
    FETCH_ALL_TASKS,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_ERROR, ADD_TASK, FETCH_NEW_STATE, CHANGE_TITLE, CHANGE_TASK
} from './actionTypes';

export function fetchTasks() {

}

export function fetchNewState(newTasks) {
    return {
        type: FETCH_NEW_STATE,
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
        dispatch(fetchNewState(newTasks));
    }
}

export function editTaskSuccess(id, editedTask) {
    return async (dispatch, getState) => {
        const newTasks = getState().task.tasks;
        let task = getState().task.tasks.find(task => task.id === id);
        task = editedTask;
        console.log(editedTask);
        dispatch(fetchNewState(newTasks));
    }
}

