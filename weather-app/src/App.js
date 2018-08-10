import React, { Component } from 'react';
import './index.css';
import logo from './assets/logo.png';
import WeatherApp from './components/WeatherApp/weatherapp'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather App</h1>
        </header>
        <WeatherApp/>
      </div>
    );
  }
}

export default App;
