const url = "https://restcountries.com/v3.1/all";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const countries = data.filter((country) => country.population < 200000);
    countries.forEach((country) => {
      console.log(country.name.common);
    });
  })
  .catch((error) => {
    console.log("Error: Unable to fetch data from the API.", error);
  });
