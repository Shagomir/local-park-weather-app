// I need a function to get the weather data from the US National Weather Service API based on the park code

var lat = 45
var lon = -93
var weatherObj = {}
fetchWeatherAPILink(lat,lon) //running to test


function fetchWeatherAPILink(lat,lon){
var requestUrl = "https://api.weather.gov/points/" + lat + "," + lon 
fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var link = data.properties.forecast;
        fetchWeatherAPIData(link)
      })}


function fetchWeatherAPIData(link){
fetch(link)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var weatherData = data.properties.periods[0];
        console.log("weather object", weatherData)
        // eventually call a function to display the data from here, pass weatherData
      })}

// I need a function to display the weather data in the weather section of the page

// I need a function to get the park alerts from the NPS API based on the park code

// I need a function to display the alerts in the alerts section of the page

// I need a function to get the park news from the NPS API based on the park code

// I need a function to store locations marked as favorites in local storage
$(function() {
    $('#favorite').click(function() {
        var favorite = $('#favorite').val();
        localStorage.setItem('favorite', favorite);
    });
});

// I need an event listener function to display the favorites stored in local storage on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var localStorageList = document.getElementById('favorite');
        for (let i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var listItem = document.createElement('li');
            listItem.textContent = `${key}` + `: ` + `${value}`;
            listItem.setAttribute('class', 'list-group-item');
            localStorageList.appendChild(listItem);
        }
        var listArray = Array.from(localStorageList.children);
        listArray.sort(function(a, b) {
            return a.textContent.localeCompare(b.textContent);
        });
        localStorageList.innerHTML = '';
        listArray.forEach((item) => localStorageList.appendChild(item));
    }, 25);
});



// I need a function to call the Google Maps API to display a map of the park
$(function() {
    $('#mapBox').click(function() {
        var map = $('#mapBox').val();
        localStorage.setItem('map', map);
    });
});



// I need a function to call the Google Maps API to display a map of the park

function initMap() {
    var map = new google.maps.Map(document.getElementById('mapBox'), {
        center: { lat: 29.7267, lng: -95.6683 },
        zoom: 14
    });
}

// Function to use Google Maps API to autocomplete with location suggestions
function initAutocomplete() {
    var input = document.getElementById('textBox1');
    autocomplete = new google.maps.places.Autocomplete(input);

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var place = autocomplete.getPlace();
        // Need to add what to do with the place information
        console.log('Selected Place: ' + place.name + ' ' + place.formatted_address);
    });
}

google.maps.event.addDomListener(window, 'load', function() {
    initMap();
    initAutocomplete();
});



// I need to incorporate JSON into this somehow