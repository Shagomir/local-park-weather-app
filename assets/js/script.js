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
$(function() {
    $('#favorite').click(function() {
        var favorite = localStorage.getItem('favorite');
        $('#favorite').val(favorite);
    });
});

// I need a function to call the Google Maps API to display a map of the park
$(function() {
    $('#map').click(function() {
        var map = $('#map').val();
        localStorage.setItem('map', map);
    });
});

// I need a function to display the map in the map section of the page

// I need to incorporate JSON into this somehow