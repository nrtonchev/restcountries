import axios from "axios";

const appIdKey = import.meta.env.VITE_OPEN_WEATHER_KEY;
const url = 'https://api.openweathermap.org/data/2.5/weather?'

const getCapitalWeather = (lat, lon) => {
  console.log(appIdKey);
  const request = axios.get(`${url}lat=${lat}&lon=${lon}&appid=${appIdKey}&units=metric`);
  return request.then(response => response.data);
}

export { getCapitalWeather }