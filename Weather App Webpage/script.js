const apiKey = '4HJSYGPYJXVBF75UBFT2DBHJV'; 

function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const current = data.currentConditions;
            document.getElementById('weatherResult').innerHTML = `
                <h2>Weather in ${data.resolvedAddress}</h2>
                <p>Temperature: ${current.temp}°C</p>
                <p>Condition: ${current.conditions}</p>
                <p>Humidity: ${current.humidity}%</p>
                <p>Wind Speed: ${current.windspeed} km/h</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('weatherResult').innerHTML = `<p style="color:red;">Error fetching weather data.</p>`;
        });
}



const arr = [1,2,3,4]


const res = arr.map((t,i) => {
   console.log(i, t)
})



