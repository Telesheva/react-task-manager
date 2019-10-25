import * as firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCW_yZYSwSlKKiI1HcNmyZ9eBrkfQFJcnU",
    authDomain: "react-task-manager-a81c0.firebaseapp.com",
    databaseURL: "https://react-task-manager-a81c0.firebaseio.com",
    projectId: "react-task-manager-a81c0",
    storageBucket: "react-task-manager-a81c0.appspot.com",
    messagingSenderId: "56182209902",
    appId: "1:56182209902:web:07904c4dbc93d559f3557f",
    measurementId: "G-5NLBW9FF17"
});

export default app;