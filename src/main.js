import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './router';

//**//
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOZsyilgV6v0VZ56n_7vjf2MdeuMepIo4",
  authDomain: "wakabotpro.firebaseapp.com",
  projectId: "wakabotpro",
  storageBucket: "wakabotpro.appspot.com",
  messagingSenderId: "537097511792",
  appId: "1:537097511792:web:9c96087be1fb9b41ada5b5",
  measurementId: "G-YRVN810FDF"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log(analytics)
//**//

const app = createApp(App);
app.use(router);
app.mount('#app');