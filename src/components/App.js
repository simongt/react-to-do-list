import React, { Component } from 'react';
import Header from './layout/Header';
import Lists from './Lists';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Lists />
      </div>
    );
  }
}

export default App;
