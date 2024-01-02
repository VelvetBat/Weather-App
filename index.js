//axios
function refreshWeather(response) {
  let tempElement = document.querySelector("#temp");
  let temp = response.data.temperature.current;

  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(temp);
}

function searchCity(city) {
  let apiKey = "od4bd0df154ad3f5258f65d3a3c5bt61";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Sydney");
