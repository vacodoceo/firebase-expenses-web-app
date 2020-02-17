import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Menu from "./components/Menu";
// Firebase config
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};
class App extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <div className="App">
        {user ? (
          <Menu user={user} signOut={signOut} />
        ) : (
          <Login signInWithGoogle={signInWithGoogle} />
        )}
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
