import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBUjlKyDuiLet1l1yRD7YM8dVL4aZG2I4E",
    authDomain: "nextjs-manga-reader.firebaseapp.com",
    databaseURL: "https://nextjs-manga-reader.firebaseio.com",
    projectId: "nextjs-manga-reader",
    storageBucket: "nextjs-manga-reader.appspot.com",
    messagingSenderId: "12660338645",
    appId: "1:12660338645:web:9ef8db08575617833e175c"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;