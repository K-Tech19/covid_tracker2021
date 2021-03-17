import React, { useState, useEffect} from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar, Pie } from 'react-chartjs-2'
import styles from './Chart.module.css'


const Chart = (props) =>{

    const [ dailyData, setDailyData] = useState([]);

    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }


        fetchAPI()
    },[])

    // const barChart = {
    //     console.log(barChart)
    // }
    // const pieChart = {
    //     console.log(barChart)
    // }
    const lineChart = (
        dailyData.length !== 0
        ? (
        <Line 
            data={{
                labels: dailyData.map(({ date })=> date), //map function short-hand
                datasets: [{
                    data: dailyData.map(({ confirmed })=> confirmed), 
                    label: 'Confirmed Cases',
                    borderColor: 'blue',
                    fill: true,
                },{
                    data: dailyData.map(({ deaths })=> deaths), 
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.663)',
                    fill: true,
                },]
            }}
        />) : null
    )


    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
    
}


// const [ tracker, setTracker] = useState([]);
// let currentVal = []
// let beds = []
// let deathCount = []
// let dates = []


// useEffect(()=>{
//     axios.get("https://covid19.mathdro.id/api")
//     .then(res =>{
//         // console.log(res.data)
//         // forEach(const dataObj of res.data) {
//         //     dates.push(  parseInt(dataObj.dates))
//         //     beds.push(parseInt(dataObj.hospitalized))
//         //     deathCount.push(parseInt(dataObj.death))
//         // }
//         setTracker(res.data) // reverse response to receive data from the beginning of the pandemic compared to latest
//         })
//     .catch(err => {
//         console.log(err)
//         });
//     }, []) 
// console.log(tracker)


// let confirmed ;
// if(tracker.length > 0){confirmed = tracker.map((trace, index)=> trace.confirmed.value)}
// const confirmedData = confirmed

// let death ;
// if(tracker.length > 0){death = tracker.map((trace, index)=> trace.deaths.value)}
// const deathData = death

// let recovered ;
// if(tracker.length > 0){recovered = tracker.map((trace, index)=> trace.recovered.value)}
// const recoveredData = recovered

// let dailySummary ;
// if(tracker.length > 0){dailySummary = tracker.map((trace, index)=> trace.dailySummary)}
// const dailySummaryData = dailySummary

// let negativeData ;
// if(tracker.length > 0){negativeData = tracker.map((trace, index)=> trace.negative)}
// const negativeDataN = negativeData


// let dateData ;
// if(tracker.length > 0){dateData = tracker.map((trace, index)=> trace.date)}
// const dateDataN = dateData

// let deathData ;
// if(tracker.length > 0){deathData = tracker.map((trace, index)=> trace.death)}
// const deathDataN = deathData;




export default Chart;