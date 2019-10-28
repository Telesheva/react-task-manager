import axios from '../../axios/axios-tasks';
import {
    ADD_TASK_ERROR,
    ADD_TASK_SUCCESS,
    EDIT_TASK_ERROR,
    FETCH_DELETE_ERROR,
    FETCH_TASK_ERROR,
    FETCH_TASK_SUCCESS,
    FETCH_TASKS_ERROR,
    FETCH_TASKS_START,
    FETCH_TASKS_SUCCESS,
    TOGGLE_FAVORITES_SUCCESS
} from './actionTypes';

const getTasks = async id => {
    const response = await axios.get('./tasks.json');

    const firebaseIds = [];
    const tasks = Object.keys(response.data).map(item => {
        if (response.data[item].id === id) {
            firebaseIds.push(item);
        }
        return response.data[item];
    });

    return {
        tasks, firebaseIds
    }
};

export function fetchTasks() {
    return async dispatch => {
        dispatch(fetchTasksStart());
        try {
            const response = await axios.get('/tasks.json');

            const tasks = [];

            Object.keys(response.data).forEach(item => {
                const currentObj = response.data[item];
                tasks.push({
                    id: currentObj.id,
                    taskTitle: currentObj.taskTitle,
                    taskBody: currentObj.taskBody,
                    date: currentObj.date,
                    isFavorite: currentObj.isFavorite
                })
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
    return async dispatch => {
        try {
            const response = await axios.get('./tasks.json');

            const tasks = Object.keys(response.data).map(item => {
                return response.data[item];
            });

            const task = tasks.find(task => task.id === id);
            dispatch(fetchTaskSuccess(task));
        } catch (e) {
            dispatch(fetchTaskError(e));
        }
    }
}

export function fetchTaskSuccess(currentTask) {
    return {
        type: FETCH_TASK_SUCCESS,
        currentTask
    }
}

export function fetchTaskError(e) {
    return {
        type: FETCH_TASK_ERROR,
        error: e
    }
}

export function toggleFavoritesSuccess(newTasks) {
    return {
        type: TOGGLE_FAVORITES_SUCCESS,
        newTasks
    }
}

export function addTask(task) {
    return async dispatch => {
        try {
            await axios.post('./tasks.json', task);
            dispatch(addTaskSuccess(task));
        } catch (e) {
            dispatch(addTaskError(e));
        }
    }
}

export function addTaskSuccess(task) {
    return {
        type: ADD_TASK_SUCCESS,
        task
    };
}

export function addTaskError(e) {
    return {
        type: ADD_TASK_ERROR,
        error: e
    }
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
    return async dispatch => {
        try {
            const {tasks, firebaseIds} = await getTasks(id);
            const task = tasks.find(task => task.id === id);
            await axios.delete(`./tasks/${firebaseIds[0]}.json`, task);
            dispatch(fetchTasks());
        } catch (e) {
            dispatch(fetchDeleteError(e));
        }
    }
}

export function fetchDeleteError(e) {
    return {
        type: FETCH_DELETE_ERROR,
        error: e
    }
}

export function editTask(editedTask) {
    return async dispatch => {
        try {
           const {tasks, firebaseIds} = await getTasks(editedTask.id);

            let task = tasks.find(task => task.id === editedTask.id);
            task = editedTask;

            await axios.patch(`./tasks/${firebaseIds[0]}.json`, {
                taskTitle: task.taskTitle,
                taskBody: task.taskBody
            });

            dispatch(fetchTasks());
        } catch (e) {
            dispatch(editTaskError(e));
        }
    }
}

export function editTaskError(e) {
    console.log(e);
    return {
        type:  EDIT_TASK_ERROR,
        error: e
    }
}
