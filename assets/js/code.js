var searchEl = document.querySelector('submit');
var search = document.querySelector("#city").value;

var weatherApp = function(user) {

var api = 'https://api.openweathermap.org/data/2.5/weather?' + search + '&id=2172797&appid=5024011b229f8ff2b79d105f9dc60a26';

fetch(api).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
 

var todayWeather = document.getElementById("select-city");

  todayWeather.innerHTML = "";

  var weatherTitle = document.createElement("h1");
  var tempSection = document.createElement("p");
  var humidity = document.createElement('p');
  var pressure = document.createElement('p')
  var wind = document.createElement('p')

  weatherTitle.textContent = "Weather:"
  todayWeather.appendChild(weatherTitle);

  tempSection.textContent = "Temperature: " + data.main.temp;
  todayWeather.appendChild(tempSection);

  humidity.textContent = "Humidity: " + data.main.humidity;
  todayWeather.appendChild(humidity);

  pressure.textContent = "Pressure: " + data.main.pressure;
  todayWeather.appendChild(pressure);

  wind.textContent = "Wind: " + data.wind.deg;
  todayWeather.appendChild(wind);

      });
    });
 };
    
weatherApp();

    

