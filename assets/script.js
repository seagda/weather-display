var myApiKey = "3cda3951c16a76407cc22a6769eab9d3"
var currentCity = "Seattle";
var queryURLCity = "https://api.openweathermap.org/data/2.5/weather?q="+currentCity+"&appid="+myApiKey;
console.log(queryURLCity);


var queryURLAllone = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid="+myApiKey;

// Setup AJAX request
