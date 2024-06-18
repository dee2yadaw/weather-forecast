async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '0a7d24af58153a66ac961acbe82e1cd0'; // Replace with your actual API key
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `${proxyUrl}https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        console.log('Fetching weather data for:', city);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Weather Data:', data);

        if (data.cod === '404') {
            document.getElementById('weather-result').innerHTML = 'City not found. Please try again.';
        } else {
            const weather = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weather-result').innerHTML = weather;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('weather-result').innerHTML = 'Error fetching data. Please try again later.';
    }
}
