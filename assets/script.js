var myApiKey = "3cda3951c16a76407cc22a6769eab9d3"
var citySearched = [];



// Setup AJAX request
function getCityWeather(currentCity) {
    var queryURLCity = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=" + myApiKey;

    $.ajax({
        url: queryURLCity,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            var cityLat = response.coord.lat;
            var cityLon = response.coord.lon;

            //        debugger;
            // start AJAX subquery for ALLone call
            var queryURLAllone = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&appid=" + myApiKey;
            $.ajax({
                url: queryURLAllone,
                method: "GET"
            })
                .then(function (weatherData) {
                console.log(weatherData);
                
// GET CURRENT DATA AND DISPLAY                
// TODO: define variables needed from weatherData

// TODO: style them
// TODO: append them to HTML

// GET DAILY FORECAST DATA
// TODO: create for loop to create five boxes that hold 5-day forecast data 
            })

        })




}


// Function for displaying city search data
function renderButtons() {

    // Empty content inside the buttons-view div prior to adding new cities
    $("#prev-city-view").empty();
    // Loop through the citySearched array, then generate buttons for previous cities in the array
    for (var i = 0; i < citySearched.length; i++) {
        var newButton = $("<button>");
        newButton.text(citySearched[i]);
        $("#prev-city-view").append(newButton);
    }
}

// This function handles events where the add movie button is clicked
$("#add-city").on("click", function (event) {
    // event.preventDefault() prevents submit button from trying to send a form.
    event.preventDefault();

    // Capture the city searched the user types into the input field
    var currentCity = $("#city-input").val();
    // Add to previous searches array
    citySearched.push(currentCity);
// TODO: save citySearched array to Localstorage

    console.log(citySearched);
    // The renderButtons function is called, rendering the list of previous searches
    renderButtons();
    getCityWeather(citySearched);
});
// TODO: Add onload event which will get from localstorage 
// TODO: set citySearched to what's stored in localstorage

// Calling the renderButtons function to display the initial list of cities
// TODO: move this call inside the onload function once it's written
renderButtons();