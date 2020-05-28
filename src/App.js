import React from 'react';
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

import ComingSoon from "./components/ComingSoon";
import CreateComposition from "./components/CreateComposition";
import Home from "./components/Home";
import NavbarMenu from "./components/NavbarMenu";
import SignIn from "./components/SignIn";
import SingleComposition from "./components/SingleComposition";
import Footer from "./components/Footer";
import UpdateComposition from "./components/UpdateComposition";
import Upload from "./components/Upload";


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

                      <Route path="/video" component={ComingSoon} />

                      <Route path="/audio" component={ComingSoon} />
                    </Switch>
                  </main>
                </FirebaseAuthProvider>
          </Router>
    )
  }
}

export default App;
