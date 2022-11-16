
const temp = document.getElementById("current-temp").textContent;
const windspeed = document.getElementById("windSpeed").textContent;
const windchill = document.getElementById("windChill");
if (temp <= 50 && windspeed > 3){
   let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
   
   windchill.textContent = chill;
}