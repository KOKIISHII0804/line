import "./App.css";

import Line from "./components/Line";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./SignIn";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
initializeApp(firebaseConfig);
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/signin`} element={<SignIn />} />
        {/* 縦にならべたい */}
        <Route path={`/line`} element={<Line />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
