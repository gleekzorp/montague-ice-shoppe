import React, { Component } from 'react';
import MainMenuPage from './MenuPage/main'


import Home from "./home"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Home />
        <MainMenuPage />
      </div>
    );
  }
}
