import axios from "axios"

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
