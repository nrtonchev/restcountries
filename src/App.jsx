import { useEffect, useState } from 'react'
import './App.css'
import countriesService from './services/countriesService'
import Filter from './components/Filter'
import Content from './components/Content'
import { getCapitalWeather } from './services/weatherService'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState(null);
  const [countryWeather, setCountryWeather] = useState(null);

  const filteredCountries = countries.filter(x => x.name.common.toLowerCase().includes(filter));

  useEffect(() => {
    countriesService.getAllCountries()
      .then(response => {
        setCountries(response);
      })
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCountryDetails(null);
    setCountryWeather(null);
  }

  const handleSetCountryDetails = (details) => {
    countriesService.getCountryByName(details).then(response => {
      setCountryDetails(response);
      handleSetCountryWeather(response.capitalInfo.latlng);
    })
  }

  const handleSetCountryWeather = (capitalInfo) => {
    getCapitalWeather(capitalInfo[0], capitalInfo[1]).then(response => {
      setCountryWeather(response);
      console.log(response);
    });
  }

  return (
    <>
      <Filter handleFilterChange={handleFilterChange}/>
      <Content 
      filteredCountries={filteredCountries} 
      countryDetails={countryDetails}
      handleSetCountryDetails={handleSetCountryDetails}
      countryWeather={countryWeather}/>
    </>
  )
}

export default App
