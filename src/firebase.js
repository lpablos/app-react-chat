import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC-jKM0Y6Mamnggue84bRKdixNJt3sVcnk",
    authDomain: "app-react-chat.firebaseapp.com",
    projectId: "app-react-chat",
    storageBucket: "app-react-chat.appspot.com",
    messagingSenderId: "85091208993",
    appId: "1:85091208993:web:3d73f694a579540c8fb860"
};
// Initialize Firebase
app.initializeApp(firebaseConfig);
// export
const db = app.storage()
const auth = app.auth()
const provider = new app.auth.GoogleAuthProvider()
// 
export {db, auth, provider}
