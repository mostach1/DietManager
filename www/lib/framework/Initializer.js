
// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBVVhULg5Edeujg3aB5ldA7JJhS6upUbCk",
    authDomain: "dietmanager-4472f.firebaseapp.com",
    databaseURL: "https://dietmanager-4472f.firebaseio.com",
    projectId: "dietmanager-4472f",
    storageBucket: "dietmanager-4472f.appspot.com",
    messagingSenderId: "788592610510"
});

controller.onCreate();

document.addEventListener('deviceready', controller.onDeviceReady.bind(controller), false);