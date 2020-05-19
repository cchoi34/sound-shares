import React from 'react';
import logo from './logo.svg';
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import CreateComposition from "./components/CreateComposition.js";
import Home from "./components/Home.js";
import NavbarMenu from "./components/NavbarMenu.js";
import SignIn from "./components/SignIn.js";
import SingleComposition from "./components/SingleComposition.js";
import Footer from "./components/Footer.js";
import UpdateComposition from "./components/UpdateComposition.js";
import Upload from "./components/Upload.js";
import { render } from '@testing-library/react';


class App extends React.Component {
  render() {

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

    return (
          <Router>
                <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
                  <main className="main">
                    <NavbarMenu />
                    <Switch>
                      <Route exact path="/" component={Home} />

                      <Route path="/home" component={Home} />

                      <Route path="/signin" component={SignIn} />

                      <Route path="/upload" component={Upload} />

                      <Route path="/upload-composition" component={CreateComposition} />

                      <Route exact path="/single-composition/:id" component={SingleComposition} />

                      <Route path="/single-composition/:id/edit" component={UpdateComposition} />
                      
                    </Switch>
                  </main>
                </FirebaseAuthProvider>
          </Router>
    )
  }
}

export default App;
