import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Home></Home>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
