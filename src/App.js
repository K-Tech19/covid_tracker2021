import React,{ Component } from 'react'
import Chart from './components/Chart/Chart' //chart component
import CountrySelector from './components/CountrySelector/CountrySelector' //country picker component
import Tiles from './components/Tiles/Tiles' //tiles component
import styles from './App.module.css' //helps add style to app / container
import { fetchData } from './api'




class App extends Component {
  state = {
    data: {},
    country: '',
  }



  async componentDidMount(){
    const fetchedData = await fetchData()

    this.setState({data: fetchedData}) // gives us access to use the data in Tiles Component
  }

  handleCountryChange = async (country) => {
    console.log(country)
    // fetch the data
    // set the state
  }




  render() {


    return (
      <div className={styles.container}> 
      {/* stop inferenece with other css files */}
        <h1>Covid Tracker 2021 😷</h1>
        <Chart /> 
        <Tiles data={this.state.data}/>
        <CountrySelector handleCountryChange={this.handleCountryChange} />
      </div>
    )
  }
}

export default App;
