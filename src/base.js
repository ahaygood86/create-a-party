import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAiWVtZOQxbtDAGIKSQjwGwMkgnLY5mcuo",
    authDomain: "andy-dev-test.firebaseapp.com",
    databaseURL: "https://andy-dev-test.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }

export default base;