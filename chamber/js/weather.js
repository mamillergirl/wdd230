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