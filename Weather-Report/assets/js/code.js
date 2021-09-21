var searchEl = document.querySelector('submit');

var weatherApp = function(user) {

var api = 'https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=5024011b229f8ff2b79d105f9dc60a26';

fetch(api).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
 

var todayWeather = document.getElementById("select-city");

  todayWeather.innerHTML = "";

  var weatherTitle = document.createElement("h1");
  var tempSection = document.createElement("p");
  var icon = document.createElement("img");

  weatherTitle.textContent = "Weather:"
  todayWeather.appendChild(weatherTitle);

  tempSection.textContent = "Temperature: " + data.main.temp;
  todayWeather.appendChild(tempSection);

  icon.textContent = "http://openweathermap.org/img/w/" + icon + ".png";
  todayWeather.appendChild(icon);

      });
    });
 };
    
weatherApp();

    

