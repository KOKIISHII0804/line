import React, { useState } from "react";
import { auth } from "firebase";
import firebase from "firebase/compat/app";

import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function SendMessage() {
  // TODO: Replace the following with your app's Firebase project configuration
  // See: https://firebase.google.com/docs/web/learn-more#config-object
  const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://DATABASE_NAME.firebaseio.com",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);
  const [message, setMessage] = useState("");
  function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    database.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="SendMsg">
          <Input
            placeholder="メッセージを入力してください"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <SendIcon />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
