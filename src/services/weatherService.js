import axios from "axios";

const appIdKey = 'bde3f8bb4b47fbea3f5c0ad4fd9913a8';
const url = 'https://api.openweathermap.org/data/2.5/weather?'

const getCapitalWeather = (lat, lon) => {
  const request = axios.get(`${url}lat=${lat}&lon=${lon}&appid=${appIdKey}&units=metric`);
  return request.then(response => response.data);
}

export { getCapitalWeather }