import React from "react";
import * as firebase from "firebase/app";
import {
    FirebaseAuthProvider,
    FirebaseAuthConsumer,
    IfFirebaseAuthed,
    IfFirebaseAuthedAnd
  } from "@react-firebase/auth";

class SignIn extends React.Component {
    render() {
        return (
            <section className="sign-in">
                <form className="sign-in__form">
                    <div className="sign-in__form--container">
                        <label className="sign-in__label" htmlFor="email">Email</label>
                        <input className="sign-in__input" type="text" placeholder="Email" name="email" required />

                        <label className="sign-in__label" htmlFor="password">Password</label>
                        <input className="sign-in__input" type="text" placeholder="Password" name="password" required />
                    </div>
                </form>
                <button
                    onClick={() => {
                        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                        firebase.auth().signInWithPopup(googleAuthProvider);
                    }} >
                        Sign In with Google
                </button>

                <button
                    onClick={() => {
                        firebase.auth().signInAnonymously();
                    }} >
                        Sign In with Email
                </button>

                <button
                    onClick={() => {
                        firebase.auth().signOut();
                    }} >
                        Sign Out
                </button>
                {/* <FirebaseAuthConsumer>
                    {({ isSignedIn, user, providerId }) => {
                        return (
                        <pre style={{ height: 300, overflow: "auto" }}>
                            {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                        </pre>
                        );
                    }}
                </FirebaseAuthConsumer> */}

                <IfFirebaseAuthedAnd
                    filter={({ providerId, user }) => {
                        if(!user.email){return false;}
                        return (
                        providerId !== "anonymous" &&
                        user.email.indexOf("@companyname.com") > -1
                        );
                    }}
                    >
                    {({ isSignedIn, user, providerId }) => {
                    return (
                        <div>
                            <h1>Does this work??</h1>
                        </div>
                    );
                    }}
                </IfFirebaseAuthedAnd>
            </section>
        )
    }
}

export default SignIn;