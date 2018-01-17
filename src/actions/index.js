import axios from 'axios';

const API_KEY = "c77b9265edef219c3b539c559a7c1dba";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

let country = 'us';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},${country}`;
    const request = axios.get(url);

    console.log('Request: ', request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}