const url = "https://restcountries.com/v3.1/region/asia";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(country.name.common);
    });
  })
  .catch((error) => {
    console.log("Error: Unable to fetch data from the API.", error);
  });
