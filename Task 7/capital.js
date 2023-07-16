const url = "https://restcountries.com/v3.1/all";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      const { name, capital, flags } = country;

      console.log("Country Name:", name.common);
      console.log("Capital:", capital[0]);
      console.log("Flag URL:", flags);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
