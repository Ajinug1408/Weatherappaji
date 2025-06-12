//Untuk mendapatkan cuaca
async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'Enter Your API KEY'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weather-result').innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>🌡 Temperature: ${data.main.temp}°C</p>
                <p>☁ Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            document.getElementById('weather-result').innerHTML = `<p>❌ City not found</p>`;
        }
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p>⚠️ Failed to fetch weather data</p>`;
    }
}


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
        
        const bsCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), {
            toggle: false
        });
        bsCollapse.hide();
    });
});
