import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    injectTapEventPlugin();
    return (
      <div className="App">
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
