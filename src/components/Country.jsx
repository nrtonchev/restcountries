function Country({country, handleSetCountryDetails})
{
  const countryName = country.name.common;
  return(
    <p>{countryName} <button onClick={() => handleSetCountryDetails(countryName)}>show</button></p>
  )
}

export default Country