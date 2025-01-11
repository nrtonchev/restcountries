import axios from "axios";

const appIdKey = import.meta.env.OPEN_WEATHER_KEY;
const url = 'https://api.openweathermap.org/data/2.5/weather?'

const getCapitalWeather = (lat, lon) => {
  const request = axios.get(`${url}lat=${lat}&lon=${lon}&appid=${appIdKey}&units=metric`);
  return request.then(response => response.data);
}

export { getCapitalWeather }