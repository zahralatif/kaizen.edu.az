import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAIY14jK41b8UpxsPYCyagWOSrOfOvn1_U",
  authDomain: "kaizen-f5210.firebaseapp.com",
  databaseURL: "https://kaizen-f5210-default-rtdb.firebaseio.com",
  projectId: "kaizen-f5210",
  storageBucket: "kaizen-f5210.appspot.com",
  messagingSenderId: "976186795292",
  appId: "1:976186795292:web:a9457985a47b7be7df46d9"
};

const app = initializeApp(firebaseConfig);

const storageRef = getStorage().ref().child("myimages");
