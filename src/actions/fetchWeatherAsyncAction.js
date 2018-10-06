import axios from 'axios';

const API_KEY = '1ce406d883936c1e46fb9bd3c9c696b9'
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_PENDING = 'FETCH_WEATHER_PENDING';
export const FETCH_WEATHER_FULFILLED = 'FETCH_WEATHER_FULFILLED';

export const fetchWeather = (city) => {
  const url = API_URL + `q=${city},pl&appid=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}