import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [userInput, setuserInput] = useState("");

  function inputChnageHandler(event) {
    setuserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>inside outt!</h1>
      <input onChange={inputChnageHandler} />
      <div>welcome {userInput}</div>
    </div>
  );
}
