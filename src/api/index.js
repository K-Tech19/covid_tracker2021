import axios from "axios"
import CountrySelector from "../components/CountrySelector/CountrySelector";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try { 
        //run if fetch is successful
        const { data } = await axios.get(url)
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
        const modifiedData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifiedData 
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