function CountryDetails({country, countryWeather})
{
  const languages = Object.keys(country.languages).map((key) => [country.languages[key]]);

  return(
    <>
      <h1>{country.name.common}</h1>
      <div>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area}</p>
      </div>
      <div>
        <h3>Languages</h3>
        <ul>
          { languages.map(lang => <li key={lang}>{lang}</li>) }
        </ul>
      </div>
      <div>
        <img className='flag' src={country.flags.svg} alt={country.flags.alt} />
      </div>
      {countryWeather ? 
      <div>
        <h2>Weather in {country.capital[0]}</h2>
        <p>Temperature: {countryWeather.main.temp} Celcius</p>
        <p>Wind: {countryWeather.wind.speed} m/s</p>
      </div> 
      : null}
    </>
  )
}

export default CountryDetails