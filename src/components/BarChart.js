import React, { useState, useEffect} from 'react'

import { Line } from 'react-chartjs-2'
import axios from 'axios'

const BarChart = () =>{

    const [ historicValues, setHistoricValues] = useState([]);
    const [hospitalized, setHospitalized] = useState([]);
    const [ tracker, setTracker] = useState([]);

    // let currentVal = []
    // let beds = []
    // let deathCount = []
    // let dates = []

useEffect(()=>{
    axios.get("https://api.covidtracking.com/v1/us/daily.json")
    .then(res =>{
        console.log(res.data)
        // forEach(const dataObj of res.data) {
        //     dates.push(parseInt(dataObj.dates))
        //     beds.push(parseInt(dataObj.hospitalized))
        //     deathCount.push(parseInt(dataObj.death))
        // }
        setTracker(res.data)
        })
    .catch(err => {
        console.log(err)
        });
    }, []) 
    console.log(tracker)
    let trackerData ;
    if(tracker.length > 0){
        trackerData = tracker.map((trace, index)=>{
            return(
                <div key={index}>
                    <h1>
                        {trace.death}
                    </h1>
                </div>
            )
        })
    }







    return (
        <div>
            <Line 
            data={{
                labels: ['Reds','Blue','Yellow','Green','Purple','Orange'], 
                datasets: [{
                    label: '# of cases',
                    data: trackerData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 207, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                            ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                            ],
                        borderWidth: 1,
                    },
                ],
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
            }}
            />
        </div>
    )
    
}

export default BarChart;