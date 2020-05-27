export default (name, countries) => {
  if (name === 'colombia') {
    const filteredCountries = countries.filter(country => (
      country.name === 'colombia'
    ));
    return filteredCountries;
  };
  if (name === 'argentina') {
    const filteredCountries = countries.filter(country => (
      country.name === 'argentina'
      || country.name === 'colombia'
    ));
    return filteredCountries;
  };
  if (name === 'chile') {
    const filteredCountries = countries.filter(country => (
      country.name === 'chile' 
      || country.name === 'argentina'
      || country.name === 'colombia'
    ));
    return filteredCountries;
  };
  if (name === 'brasil') {
    const filteredCountries = countries.filter(country => (
      country.name === 'brasil'
      || country.name === 'chile' 
      || country.name === 'argentina'
      || country.name === 'colombia'
    ));
    return filteredCountries;
  };
  if (name === 'mexico') return countries;
  return countries;
};
