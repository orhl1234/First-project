const weatherImage = document.getElementById('weather-icon')
function getWeather() {
    const APIKEY = 'c1baeb62dc38eeb39496baa05740cc4d'
    const cityResult = document.getElementById('weather-input').value;
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityResult}&appid=${APIKEY}`
    if (!cityResult) {
        alert('Please enter a city');
        return;
    }
    fetch(APIURL)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        });
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    // Clear previous content
    weatherInfoDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if (data.cod === '404') { //whats cod?
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        console.log(data)
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
        const temperatureHTML = `
            <p>${temperature}°C</p>
        `;
        const weatherHtml = `
            <p>${cityName}</p>
            <p>${description}</p>
        `;
        weatherImage.style.display = 'block'
        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;
        // showImage();
    }
}
// function showImage() {
//     const weatherIcon = document.getElementById('weather-icon');
//     weatherIcon.style.display = 'block'; // Make the image visible once it's loaded
// }