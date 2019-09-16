import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-task-manager-a81c0.firebaseio.com/'
});