import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async ({sw, ne}) => {
    try {
        const {data: {data}} = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng
            },
            headers: {
                'X-RapidAPI-Key': '4c196969cemsh4b4b043b307b371p17dc04jsn0d3d66dd6368',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })
        return data;
    } catch (error) {
        console.log("error", error)
    }
}