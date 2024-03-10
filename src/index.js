function displayTemperature(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = response.data.temperature.current;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search");
  let city = document.querySelector("#city");
  city.innerHTML = searchInputElement.value;

  performApiCall();
}
function performApiCall() {
  let cityElement = document.querySelector("#city");
  let city = cityElement.innerHTML;
  let apiKey = "03f2301a7a8ebc2bo4ac5b00ad6aat4a";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiURL).then(displayTemperature);
}

let now = new Date();

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let date = document.querySelector(`#date`);

date.innerHTML = `${day} ${hour}:${minutes}, moderate rain`;

let searchForm = document.querySelector(".searchbar");
searchForm.addEventListener("submit", search);

performApiCall();
