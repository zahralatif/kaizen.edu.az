import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {getStorage} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js"

const firebaseConfig = {
  apiKey: "AIzaSyA9Sj40XQLvQd3WsRGEFpd-Dm-rj_MrqGs",
  authDomain: "kaizen-ecbd1.firebaseapp.com",
  databaseURL: "https://kaizen-ecbd1-default-rtdb.firebaseio.com",
  projectId: "kaizen-ecbd1",
  storageBucket: "kaizen-ecbd1.appspot.com",
  messagingSenderId: "434429707201",
  appId: "1:434429707201:web:e46e0af31b2fb7d2f66540",
  measurementId: "G-2W4SRTSPD7"
};

const app = initializeApp(firebaseConfig);
 