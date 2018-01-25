import React, { Component } from "react";
// import logo from "./logo.svg";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;
