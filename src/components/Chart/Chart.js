import React, { useState, useEffect} from 'react'

import { Line } from 'react-chartjs-2'
import axios from 'axios'

const Chart = () =>{

    const [ tracker, setTracker] = useState([]);

    // let currentVal = []
    // let beds = []
    // let deathCount = []
    // let dates = []

useEffect(()=>{
    axios.get("https://covid19.mathdro.id/api")
    .then(res =>{
        // console.log(res.data)
        // forEach(const dataObj of res.data) {
        //     dates.push(parseInt(dataObj.dates))
        //     beds.push(parseInt(dataObj.hospitalized))
        //     deathCount.push(parseInt(dataObj.death))
        // }
        setTracker(res.data) // reverse response to receive data from the beginning of the pandemic compared to latest
        })
    .catch(err => {
        console.log(err)
        });
    }, []) 
    console.log(tracker)
    
    
    let confirmed ;
    if(tracker.length > 0){confirmed = tracker.map((trace, index)=> trace.confirmed.value)}
    const confirmedData = confirmed
    
    // let death ;
    // if(tracker.length > 0){death = tracker.map((trace, index)=> trace.deaths.value)}
    // const deathData = death
    
    let recovered ;
    if(tracker.length > 0){recovered = tracker.map((trace, index)=> trace.recovered.value)}
    const recoveredData = recovered
    
    let dailySummary ;
    if(tracker.length > 0){dailySummary = tracker.map((trace, index)=> trace.dailySummary)}
    const dailySummaryData = dailySummary
    
    // let negativeData ;
    // if(tracker.length > 0){negativeData = tracker.map((trace, index)=> trace.negative)}
    // const negativeDataN = negativeData


    // let dateData ;
    // if(tracker.length > 0){dateData = tracker.map((trace, index)=> trace.date)}
    // const dateDataN = dateData
    
    // let deathData ;
    // if(tracker.length > 0){deathData = tracker.map((trace, index)=> trace.death)}
    // const deathDataN = deathData;
    
    return (
        <div>
            <Line 
    data= {{
        labels: dailySummaryData, 
        datasets: [{
            label: '# of Infected',
            data: confirmedData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                    ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                    ],
            
                borderWidth: 2,
            }, {
                label: '# of Recovered',
                data: recoveredData,
                backgroundColor: 'yellow',
                borderColor: 'green'
            },
    ],
}}
    height={400}
    width={400}
    options={{
        maintainAspectRatio: false,
    }} /> 

        </div>
    )
    
}

export default Chart;