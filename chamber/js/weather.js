const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/show%20low?unitGroup=us&key=2AZAQUFYGFNDTUZKXTT6G32VN&contentType=json";

const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    const temp = Math.round(jsObject.currentConditions.temp);
    document.querySelector('#current-temp').textContent = temp;
    const desc = jsObject.currentConditions.conditions;;
    const iconsrc= `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${jsObject.currentConditions.icon}.png`;
    
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#description').textContent = desc;
    document.querySelector('#windSpeed').textContent = jsObject.currentConditions.windspeed;
  };
getWeather();
const temp = document.getElementById("current-temp").textContent;
console.log(temp);

const windspeed = document.getElementById("windSpeed").textContent;
const windchill = document.getElementById("windChill");

if (temp <= 50 && windspeed > 3){
   let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
   
   windchill.textContent = chill + "℉";
}


//const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5314245&appid=533e0e90e22511f4a70803e8458c20ae";
//const getWeather = async () => {
//    const response = await fetch(apiURL);
//    const jsObject = await response.json();
//    console.log(jsObject);
//    const f =  Math.round((jsObject.main.temp - 273.15)* 1.8000 + 32.00);
//    document.querySelector('#current-temp').textContent = f;
//    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
//    const desc = jsObject.weather[0].description;
//    
//    document.querySelector('#weathericon').setAttribute('src', iconsrc);
//    document.querySelector('#weathericon').setAttribute('alt', desc);
//    document.querySelector('#description').textContent = desc;
//    document.querySelector('#windSpeed').textContent = jsObject.wind.speed;
//  };
//getWeather();