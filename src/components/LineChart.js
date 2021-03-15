import React, { useState, useEffect} from 'react'

import { Line } from 'react-chartjs-2'
import axios from 'axios'

const LineChart = () =>{

    const [ historicValues, setHistoricValues] = useState([]);
    const [hospitalized, setHospitalized] = useState([]);
    const [ tracker, setTracker] = useState([]);

    // let currentVal = []
    // let beds = []
    // let deathCount = []
    // let dates = []

useEffect(()=>{
    axios.get("https://covid19.mathdro.id/api")
    .then(res =>{
        console.log(res.data[0])
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
    // console.log(tracker)
    
    
    // let positiveData ;
    // if(tracker.length > 0){positiveData = tracker.map((trace, index)=> trace.positive)}
    // const positiveDataN = positiveData
    
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
            {/* <Line 
    data= {{
        labels: dateDataN, 
        datasets: [{
            label: '# of Positive',
            data: positiveDataN,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                    ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                    ],
            
                borderWidth: 2,
            }, {
                label: '# of Negative',
                data: negativeDataN,
                backgroundColor: 'yellow',
                borderColor: 'green'
            },
    ],
}}
    height={400}
    width={400}
    options={{
        maintainAspectRatio: false,
    }} />  */}

        </div>
    )
    
}

export default LineChart;