import React,{ Component } from 'react'
import Chart from './components/Chart/Chart' //chart component
import CountrySelector from './components/CountrySelector/CountrySelector' //country picker component
import Tiles from './components/Tiles/Tiles' //tiles component
import styles from './App.module.css' //helps add style to app / container
import { fetchData } from './api'




class App extends Component {

  async componentDidMount(){
    const data = await fetchData()

    console.log(data)
  }

  render() {
    return (
      <div className={styles.container}> 
      {/* stop inferenece with other css files */}
        <h1>Covid Tracker 2021 😷</h1>
        <Chart /> 
        <CountrySelector />
        <Tiles />
      </div>
    )
  }
}

export default App;
