
const temp = document.querySelector("#temperature").textContent;
const windspeed = document.querySelector("#windSpeed").textContent;
const windchill = document.querySelector("#windChill");
if (temp <= 50 && windspeed > 3){
   let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
 
   windchill.textContent = chill;
}