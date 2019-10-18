/*import axios from '../../axios/axios-tasks';*/
import {
 /*   FETCH_TASKS_START,
    FETCH_ALL_TASKS,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_ERROR,*/
    ADD_TASK,
    FETCH_NEW_STATE, FETCH_TASK_SUCCESS
} from './actionTypes';

export function fetchTasks(tasks) {

}

export function fetchTaskById(id) {
    return async (dispatch, getState) => {
        const tasks = getState().task.tasks;
        const task = tasks.find(task => task.id === id);
        dispatch(fetchTaskSuccess(task));
    }
}

export function fetchTaskSuccess(currentTask) {
    return {
       type: FETCH_TASK_SUCCESS,
        currentTask
    }
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
    };
}

export function toggleFavorites(id, isFavorite) {
    return async (dispatch, getState) => {
        const newTasks = getState().task.tasks;
        const task = newTasks.find(task => task.id === id);
        task.isFavorite = isFavorite;
        dispatch(fetchNewState(newTasks));
    }
}

export function deleteTask(id) {
    return async (dispatch, getState) => {
        const newTasks = getState().task.tasks.filter(taskItem => taskItem.id !== id);
        dispatch(fetchNewState(newTasks));
    }
}

export function editTaskSuccess(editedTask) {
    return async (dispatch, getState) => {
        const newTasks = getState().task.tasks;
        let task = newTasks.find(task => task.id === editedTask.id);
        task = editedTask;
        console.log(task);
        dispatch(fetchNewState(newTasks));
    }
}

