import axios from "axios"

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try { //run if fetch is successful
        const res = await axios.get(url)
        // console.log(res)
        return res;
    } catch(error){
        console.log(error)
    }
}
