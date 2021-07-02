import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCYI6lkK-BVP7yPZM7hjnrb8sEUQ-r58rg",
    authDomain: "todoist-clone-bbab7.firebaseapp.com",
    projectId: "todoist-clone-bbab7",
    storageBucket: "todoist-clone-bbab7.appspot.com",
    messagingSenderId: "14321316971",
    appId: "1:14321316971:web:c2be82a960a6c815b1ed2e"
})

export { firebaseConfig as firebase };