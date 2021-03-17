import React,{ Component } from 'react'
import Chart from './components/Chart/Chart' //chart component
import CountrySelector from './components/CountrySelector/CountrySelector' //country picker component
import Tiles from './components/Tiles/Tiles' //tiles component
import styles from './App.module.css' //helps add style to app / container
import { fetchData } from './api'




class App extends Component {
  state = {
    data: {}, // starts state with empty object
    country: '', // starts state with empty string
  }



  async componentDidMount(){
    const fetchedData = await fetchData()

    this.setState({data: fetchedData}) // gives us access to use the data in Tiles Component
  }

  handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await fetchData(country)
    // console.log(fetchedData)

    // set the state
    this.setState({data: fetchedData, country: country})
  }




  render() {
    const { data, country } = this.state

    return (
      <div className={styles.container}> 
      {/* stop inferenece with other css files */}
        <h1>Covid Tracker 2021 😷</h1>
        <Chart data={data} country={country} /> 
        <Tiles data={data}/>
        <CountrySelector handleCountryChange={this.handleCountryChange} />
      </div>
    )
  }
}

export default App;
