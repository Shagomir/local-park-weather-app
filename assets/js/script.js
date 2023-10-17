// I need a function to get the weather data from the US National Weather Service API based on the park code

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

// I need a function to display the map in the map section of the page


let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("mapBox"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

// Function to use Google Maps API to autocomplete with location suggestions
function initAutocomplete() {
    var input = document.getElementById('textBox1');
    var autocomplete = new google.maps.places.Autocomplete(input);
}



// I need to incorporate JSON into this somehow