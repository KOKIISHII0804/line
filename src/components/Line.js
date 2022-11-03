import React, { useEffect, useState } from "react";
// import SignOut from "./SignOut";
import SendMessage from "./SendMessage";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    database
      .collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.dogs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div key={id}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}
export default Line;
