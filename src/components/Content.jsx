import CountryDetails from "./CountryDetails"
import CountryList from "./CountryList"

function Content({filteredCountries, countryDetails, handleSetCountryDetails, countryWeather})
{
  if(countryDetails){
    return(
      <CountryDetails country={countryDetails} countryWeather={countryWeather}/>
    )
  }
  else if(filteredCountries.length === 1){
    handleSetCountryDetails(filteredCountries[0].name.common)
  }
  else if(filteredCountries.length <= 0)
  {
    return(
      <p>No matches found for search criteria</p>
    )
  }
  else if(filteredCountries.length > 10){
    return(
      <p>Too many matches, specify another filter</p>
    )
  }

  return(
    <CountryList countries={filteredCountries} handleSetCountryDetails={handleSetCountryDetails}/>
  )
}

export default Content