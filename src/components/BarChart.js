import React, { useState, useEffect} from 'react'

import { Line } from 'react-chartjs-2'
import axios from 'axios'

const BarChart = () =>{

    const [ currentUsValues, setCurrentUsValues] = useState([]);
    const [hospitalized, setHospitalized] = useState([]);
    const [ death, setDeath] = useState([]);

    let currentVal = []
    let beds = []
    let deathCount = []
    let dates = []


    axios.get("https://api.covidtracking.com/v1/us/current.json")
    .then(res =>{
        console.log(res)
        for(const dataObj of res.data) {
            dates.push(parseInt(dataObj.dates))
            beds.push(parseInt(dataObj.hospitalized))
            deathCount.push(parseInt(dataObj.death))
        }
    })
    .catch(err => {
        console.log(err)
    });
    console.log(beds)
    console.log(dates)
    console.log(deathCount)










    return (
        <div>
            <Line 
            data={{
                labels: ['Reds','Blue','Yellow','Green','Purple','Orange'], 
                datasets: [{
                    label: '# of cases',
                    data: beds,
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