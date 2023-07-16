const url = "https://restcountries.com/v3.1/all";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const usdCountries = [];

    for (const country of data) {
      if (country.currencies && country.currencies.USD) {
        usdCountries.push(country.name.common);
      }
    }

    console.log(usdCountries);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
