import axios from "axios"


const url = "https://covid19.mathdro.id/api";
const dailyUrl = "https://api.covidtracking.com/v1/us/daily.json"

export const fetchData = async (country) => {
    let changeableUrl = url

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try { 
        //run if fetch is successful
        const { data } = await axios.get(changeableUrl)
        // console.log(res)
        // Data we want to work with
        const tileData = { 
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }

        // console.log(tileData)
        return tileData;
    } catch(error){
        console.log(error)
    }
}

export const fetchDailyData = async ()=> {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const alteredData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return alteredData 
    }
    catch (error) {
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } =  await axios.get(`${url}/countries`)
        return countries.map((country)=> country.name) //chooses a specific country name from the data

    }
    catch (error) {
        console.log(error)
    }
}

export const fetchICU = async () => {
    try {
        const { data } =  await axios.get(`${dailyUrl}`)
        console.log(data)

    }
    catch(error) {
        console.log(error)
    }
}