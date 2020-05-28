import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.scss';
import App from './App';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCoBMBSHWcrcaDEbdGMBaVZ68AM3h7sNYg",
  authDomain: "sound-shares.firebaseapp.com",
  databaseURL: "https://sound-shares.firebaseio.com",
  projectId: "sound-shares",
  storageBucket: "sound-shares.appspot.com",
  messagingSenderId: "637120275450",
  appId: "1:637120275450:web:2b9354b7524e77480c7a43",
  measurementId: "G-7EE1PEKZ7R"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
