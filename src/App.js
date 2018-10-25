import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainApplication from './mainApplication';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainApplication />
        </div>
      </Provider>
    );
  }
}

export default App;
