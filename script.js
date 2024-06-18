
// script.js
async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`City not found. Please check the name and try again.`);
        }
        const data = await response.json();

        const weatherResult = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
        `;
        document.getElementById('weather-result').innerHTML = weatherResult;
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `
            <p style="color: red;">Error: ${error.message}</p>
            <p>Please make sure you entered the correct city name and try again.</p>
        `;
    }
    
    }

