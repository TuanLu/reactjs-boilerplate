import React from "react";
import "./App.scss";
import Text from "./components/Text";

function App() {
  return (
    <div className="main">
      <h1 className="main__welcome">Welcome!!</h1>
      <img alt="logo" className="main__logo" src={require("./assets/images/logo.png")} />
      <Text />
    </div>
  );
}

export default App;
