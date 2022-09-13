import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDBYEZlk31w-u8Bv95muxeWcB2vfUC9y9c",

  authDomain: "cindy-s-website.firebaseapp.com",

  projectId: "cindy-s-website",

  storageBucket: "cindy-s-website.appspot.com",

  messagingSenderId: "936027307500",

  appId: "1:936027307500:web:292bc447cac0fc8fdfd4c9",

  measurementId: "G-EP5VLMS6X9"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

