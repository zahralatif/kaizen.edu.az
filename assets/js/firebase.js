// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPzCRBa-pYhhTX-PXeqy_kx8EVV00LYx4",
  authDomain: "kaizen-edu-az.firebaseapp.com",
  databaseURL: "https://kaizen-edu-az-default-rtdb.firebaseio.com",
  projectId: "kaizen-edu-az",
  storageBucket: "kaizen-edu-az.appspot.com",
  messagingSenderId: "955498457376",
  appId: "1:955498457376:web:a05a5946b056ef25a94f45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import{getDatabase, set, get, ref, child} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const db = getDatabase();

