// Set global variables
var myApiKey = "3cda3951c16a76407cc22a6769eab9d3"
// Setup  empty array to hold search results
var citySearched = [];
// Pull data from localStorage
$(document).ready(function(){
    var prevCityStored = JSON.parse(localStorage.getItem("City Searched"));
    console.log(prevCityStored);
// check data present in local storage if clear button has been clicked
    if (prevCityStored !== null){
        citySearched = prevCityStored;
    } 
    renderButtons();
});


// Setup AJAX request to get latitude and longitude for All in One query
function getCityWeather(currentCity) {
    var queryURLCity = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=" + myApiKey;

    $.ajax({
        url: queryURLCity,
        method: "GET"
    })
        .then(function (response) {
            console.log("This is the city info:\n")
            console.log(response);
            var cityLat = response.coord.lat;
            var cityLon = response.coord.lon;


// start AJAX subquery for ALLone call
            var queryURLAllone = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&appid=" + myApiKey + "&units=imperial";
            $.ajax({
                url: queryURLAllone,
                method: "GET"
            })
                .then(function (weatherData) {
                console.log("This is the weather data:\n")
                console.log(weatherData);
                //debugger;

// setup weatherConditions to allow for dynamic background image 
                var weatherConditions = "";
                var weatherCondArray = weatherData.current.weather;

                for (var i = 0; i < weatherCondArray.length; i++) {
                    weatherConditions += weatherCondArray[i].main + " ";

                    } 
                    console.log(weatherConditions);

// Display Current Weather Data
                    $("#display-current").css({backgroundImage: `url("./assets/img/pic.${weatherCondArray[0].main}.jpg")`});
                    $(".curr-city").text("Weather for " + response.name + " - " + moment(weatherData.current.dt * 1000).format("dddd, MMMM Do"));
                    $(".curr-condition").text("Conditions: " + weatherConditions);
                    $(".curr-temp").text("Temp: " + Math.floor(weatherData.current.temp) + " F");
                    $(".curr-wind").text("Wind Speed: " + Math.floor(weatherData.current.wind_speed) + " mph");
                    $(".curr-humid").text("Humidity: " + weatherData.current.humidity + "%");
                    $(".curr-uv").text("UV Index: " + Math.floor(weatherData.current.uvi));


// Display Five Day Forecast Data
            $("#5day-forecast").empty();

            for (i = 1; i < 6; i++) {
                var forecastDay = moment(weatherData.daily[i].dt * 1000).format("MMM D");
                console.log(forecastDay);

                var forecastCard = $(`
                <div class="forecast-row">
                    <div class="forecast">
                    <h5 class="card-title">${forecastDay}</h5>
                    <p>Temp: ${Math.floor(weatherData.daily[i].temp.day)} F</p>
                    <p>Wind: ${Math.floor(weatherData.daily[i].wind_speed)} mph</p>
                    <p>Humidity: ${weatherData.daily[i].humidity}%</p>
                    <p>UV Index: ${Math.floor(weatherData.daily[i].uvi)}</p>
                    </div>                
                </div>
                `)
                console.log(forecastCard);
                $("#5day-forecast").append(forecastCard);
                }
            }) 

        })
}

// Defining our function for rendering a button when a user searches for a city
function renderButtons() {

    // Empty content inside the buttons-view div prior to adding new cities
    $("#prev-city-view").empty();
    // Loop through the citySearched array, then generate buttons for previous cities in the array
    for (var i = 0; i < citySearched.length; i++) {
        var newButton = $(`<button class="btn-prev-city">`);
        newButton.text(citySearched[i]);
        $("#prev-city-view").prepend(newButton);
    }
}

// This function handles events where the add movie button is clicked
$("#add-city").on("click", function (event) {
    // Prevent submit button from trying to send a form.
    event.preventDefault();

    // Capture the city searched the user types into the input field
    var currentCity = $("#city-input").val();
    // Add to previous searches array
    citySearched.push(currentCity);

// save citySearched array to Localstorage
    localStorage.setItem("City Searched", JSON.stringify(citySearched));

    console.log(citySearched);
// The renderButtons function is called, rendering the list of previous searches
    renderButtons();
    getCityWeather(currentCity);
});


$("#prev-city-view").on("click", "button", function (event) {   
    getCityWeather($(this).text())
})


// Clear previous searches from localstorage 
$("#clear-searches").on("click", function(){
   localStorage.setItem("City Searched", null);
   location.reload();
});

// Calling the renderButtons function to display the list of cities searched
renderButtons();