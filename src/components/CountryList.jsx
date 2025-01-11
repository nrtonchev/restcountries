import Country from "./Country"

function CountryList({countries, handleSetCountryDetails})
{
  return countries.map(country => {
    return <Country key={country.name.common} country={country} handleSetCountryDetails={handleSetCountryDetails}/>
  })
}

export default CountryList