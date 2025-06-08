function showweatherDetails(event) {
      event.preventDefault();
}

const city = document.getElementById('city').value;
const apiKey = 'e419b52f8a3fe02e379bf9b7d2a7c753'; 
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(Response => Response.json())
    .then(data =>{
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
    });

 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );