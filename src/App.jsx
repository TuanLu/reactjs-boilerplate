import React from "react";
import "./App.scss";
import Text from "./components/Text";

function App() {
  return (
            <div className="main">
    <h1>Welcome!!</h1>
        <img alt="logo" src={require("./assets/images/logo.png")} />
      <Text />
    </div>
  );
}

export default App;
