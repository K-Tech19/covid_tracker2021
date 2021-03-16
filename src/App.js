import React,{ Component } from 'react'
import Chart from './components/Chart/Chart' //chart component
import CountryPicker from './components/CountryPicker/CountryPicker' //country picker component
import Tiles from './components/Tiles/Tiles' //tiles component


import './App.css';


class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Covid Tracker 2021 😷</h1>
        <Chart /> 
        <CountryPicker />
        <Tiles />
      </div>
    )
  }
}

export default App;
