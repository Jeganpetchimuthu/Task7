const url = "https://restcountries.com/v3.1/all";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const totalPopulation = data.reduce((acc, country) => {
      if (country.population) {
        return acc + country.population;
      } else {
        return acc;
      }
    }, 0);

    console.log("Total Population:", totalPopulation);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
