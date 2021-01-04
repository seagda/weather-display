# Weather Dashboard using OpenWeather API


## DESCRIPTION
A simple weather dashboard using the OpenWeather API  [https://openweathermap.org/api].

---------
## DEPLOYED APPLICATION
View the deployed weather dashboard:  [https://seagda.github.io/weather-display/].

---------
## USER STORY
AS A traveler
I WANT to find out current weather conditions in various cities around the globe, and
I WANT to have a five day forecast
SO THAT I can plan my travel activities.

---------
## TECHNOLOGIES UTILIZED 
* Bootstrap for CSS framework [https://www.openbrewerydb.org/documentation/01-listbreweries]
* Moments.js to display dates in the UI [https://www.ratebeer.com/api-documentation.asp]

---------
## PHOTO CREDITS
This weather dashboard displays a different image based on the weather condition returned from OpenWeather for a given city search query. Photo credits go to:
* Images for "Clear", "Snow", and "Clouds" conditions by s.d.mullaney
* Image for "Dust" condition by Artin Bakhan [https://unsplash.com/s/photos/artin-bakhan]
* Images for "Tornado" and "Thunderstorm" conditions by NOAA [https://unsplash.com/@noaa] 
* Image for "Mist" condition by Annie Spratt [https://unsplash.com/s/photos/annie-spratt]
* Image for "Sand" condition by Heather Shevlin [https://unsplash.com/s/photos/heather-shevlin]
* Image for "Ash" condition by Jens Johnsson [https://unsplash.com/s/photos/jens-johnsson]
* Image for "Rain" condition by Gabriele Diwald [https://unsplash.com/@gabrielediwald]
* Image for "Fog" condition by Anna Goncharova [https://unsplash.com/s/photos/anna-goncharova] 

---------
## ACCEPTANCE CRITERIA
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history

WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast

---------
## VIEW THE MOCKUP
The following images show the appearance and functionality of our MVP:

![Weather Dashboard demo](assets/img/06-server-side-apis-homework-demo.png)