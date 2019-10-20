/*import axios from '../../axios/axios-tasks';*/
import {
    ADD_TASK,
    EDIT_TASK_SUCCESS,
    FETCH_DELETE_SUCCESS,
    FETCH_TASK_SUCCESS,
    FETCH_TASKS_ERROR,
    FETCH_TASKS_START,
    FETCH_TASKS_SUCCESS,
    TOGGLE_FAVORITES_SUCCESS
} from './actionTypes';
import {createSelector} from "reselect";

export function fetchTasks() {
    return async dispatch => {
        dispatch(fetchTasksStart());
        try {
            const tasks = [];
            tasks.push({
                    id: '192938',
                    taskTitle: 'Home',
                    taskBody: 'Clean the room!',
                    date: Date.now(),
                    isFavorite: true
                },
                {
                    id: '2839819884',
                    taskTitle: 'Home',
                    taskBody: 'Wash the dishes!',
                    date: Date.parse('October 17, 2019 05:24:40'),
                    isFavorite: true
                },
                {
                    id: '42924920ddw',
                    taskTitle: 'Study',
                    taskBody: 'Do the homework!',
                    date: Date.parse('October 10, 2019 14:55:34'),
                    isFavorite: false
                },
                {
                    id: '20938174948',
                    taskTitle: 'Work',
                    taskBody: 'Meeting on Saturday!',
                    date: Date.parse('October 18, 2019 10:33:14'),
                    isFavorite: true
                },
                {
                    id: '098433123',
                    taskTitle: 'Work',
                    taskBody: 'Do the report!',
                    date: Date.parse('September 28, 2019 12:05:00'),
                    isFavorite: false
                },
                {
                    id: '467890321efd',
                    taskTitle: 'Study',
                    taskBody: 'Ask about exam questions!',
                    date: Date.parse('October 19, 2019 18:42:15'),
                    isFavorite: false
                });
            dispatch(fetchTasksSuccess(tasks));
        } catch (e) {
            dispatch(fetchTasksError(e));
        }
    }
}

export function fetchTasksStart() {
    return {
        type: FETCH_TASKS_START
    }
}

export function fetchTasksError(e) {
    return {
        type: FETCH_TASKS_ERROR,
        error: e
    }
}

export function fetchTasksSuccess(tasks) {
    return {
        type: FETCH_TASKS_SUCCESS,
        tasks
    }
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

export function fetchDeleteSuccess(newTasks) {
    return {
        type: FETCH_DELETE_SUCCESS,
        newTasks
    }
}

export function toggleFavoritesSuccess(newTasks) {
    return {
        type: TOGGLE_FAVORITES_SUCCESS,
        newTasks
    }
}

export function editTaskSuccess(newTasks) {
    return {
        type: EDIT_TASK_SUCCESS,
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
        dispatch(toggleFavoritesSuccess(newTasks));
    }
}

export function deleteTask(id) {
    return async (dispatch, getState) => {
        const newTasks = getState().task.tasks.filter(taskItem => taskItem.id !== id);
        dispatch(fetchDeleteSuccess(newTasks));
    }
}

export function editTask(editedTask) {
    return async (dispatch, getState) => {
        const newTasks = getState().task.tasks;
        let task = newTasks.find(task => task.id === editedTask.id);
        task = editedTask;
        console.log(task);
        dispatch(editTaskSuccess(newTasks));
    }
}

