import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import React from "react";
import { auth } from "./firebase";

function SignIn() {
  function singnInwithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={singnInwithGoogle}>Googleでログインする</Button>
    </div>
  );
}

export default SignIn;
