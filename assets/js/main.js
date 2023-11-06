// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPzCRBa-pYhhTX-PXeqy_kx8EVV00LYx4",
  authDomain: "kaizen-edu-az.firebaseapp.com",
  projectId: "kaizen-edu-az",
  storageBucket: "kaizen-edu-az.appspot.com",
  messagingSenderId: "955498457376",
  appId: "1:955498457376:web:a05a5946b056ef25a94f45",
  measurementId: "G-V3RK9EHTSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    icon = document.querySelector('.bx-menu')

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu')
    icon.classList.toggle('bx-x')

});

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}


window.addEventListener('scroll', scrollUp)
