const search = document.querySelector(".search__box input");
const searchButton = document.querySelector("#search__button");
const weatherImage = document.querySelector("#weather__img");
const imageBox = document.querySelector(".weather__team");
// weather api

const apiKey = "1620ef68442f8a9b74967dca2fab1715";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="; //q={city name},&appid={API key},&units=metric

// let data; // Declare data variable outside of the function
async function checkWeather(city){
        const response = await fetch(url + city +`&appid=${apiKey}`);
        data = await response.json(); // Assign the fetched data to the global data variable
        console.log(data);
        // Update the webpage with the weather information

        
        document.querySelector("#weather__city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) +`°C`;
        document.querySelector(".humidity").innerHTML = data.main.humidity+`%`;
        document.querySelector("#speed").innerHTML = data.wind.speed+` km/s`;

        if (data.weather[0].main=="Clouds"){
                weatherImage.src = "images/cloud.png"

        }else if (data.weather[0].main=="Clear"){
                weatherImage.src = "images/clear.png"
        }else if (data.weather[0].main=="Rain"){
                weatherImage.src = "images/rain.png"
        }else if (data.weather[0].main=="Mist"){
                weatherImage.src = "images/mist.png"
        }else if (data.weather[0].main=="Drizzle"){
                weatherImage.src = "images/snow.png"
        }
}

// checkWeather();

searchButton.addEventListener("click",()=>{
        checkWeather(search.value);
});


