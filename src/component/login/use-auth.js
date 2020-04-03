import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";

firebase.initializeApp(firebaseConfig);

const Auth = () => {
  const [user, setUser] = useState(null);
  console.log("checker", user);

  const signInUser = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)

      .then(res => {
        console.log(res);
        const { displayName, email, photoURL } = res.user;
        const userSignIn = { name: displayName, email, photo: photoURL };
        console.log("check", userSignIn);
        setUser(userSignIn);
        return res.user;
      })
      .catch(err => {
        console.log(err);
        setUser(null);
        return err.message;
      });
  };
  const signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(function(res) {
        console.log(res);
        setUser(null);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return {
    user,
    signInUser,
    signOutUser
  };
};

export default Auth;
