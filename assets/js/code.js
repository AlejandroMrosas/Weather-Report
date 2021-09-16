var searchEl = document.querySelector('submit');

var weatherApp = function(user) {

var api = 'https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=5024011b229f8ff2b79d105f9dc60a26';

fetch(api).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
    });
  });
};

var weatherdisplay = document.getElementById("city-view");

weatherdisplay.innerHTML = "";

var cities = document.createElement("h2");

//cities.textContent = "Weather: " + data.weather;
//weatherdisplay.appendChild(cities);
    
weatherApp();

    

