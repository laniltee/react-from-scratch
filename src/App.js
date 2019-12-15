import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <p>Wrote a React App from the scratch!</p>
        <p>Let's see if hot reloader works :D</p>
        <strong>Ade It Works !! :D :D LOL</strong>
      </div>
    );
  }
}

export default hot(module)(App);
