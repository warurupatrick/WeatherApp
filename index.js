// API key for OpenWeatherMap
const apiKey = "96365768e94e828a7bd6dbd628022153";

// API endpoint URL for weather data, specifying units as metric
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// DOM elements
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Event listener for the search button
searchBtn.addEventListener("click", () => {
    // Call the checkWeather function with the value entered in the search box
    checkWeather(searchBox.value);
});

// Async function to fetch and display weather information
async function checkWeather(city) {
    // Fetch weather data from the OpenWeatherMap API
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // Parse the response JSON data
    const data = await response.json();

    // Update DOM elements with weather information
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";

    // Update weather icon based on weather conditions
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        // Corrected the image path for the "Drizzle" case
        weatherIcon.src = "/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "/images/mist.png";
    }

    // Display the weather information container
    document.querySelector(".weather").style.display = "block";
}
