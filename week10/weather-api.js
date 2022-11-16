//const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=533e0e90e22511f4a70803e8458c20ae";
const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/show%20low?unitGroup=us&key=2AZAQUFYGFNDTUZKXTT6G32VN&contentType=json";

const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
     
    const temp = jsObject.currentConditions.temp;
    document.querySelector('#current-temp').textContent = temp;
    const desc = jsObject.currentConditions.conditions;
    document.querySelector('figcaption').textContent = desc;
    const iconsrc= `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${jsObject.currentConditions.icon}.png`;
    
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
  };
getWeather();


