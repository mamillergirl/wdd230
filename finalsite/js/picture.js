const apiURL = "https://go-apod.herokuapp.com/apod";

const getPic = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    document.getElementById('astronomyImg').setAttribute('src', jsObject.url);
    document.getElementById('astronomyImg').setAttribute('alt', jsObject.title);
    document.getElementById('dailyTitle').textContent = jsObject.title;
    document.getElementById('date').textContent = jsObject.date;
    document.getElementById('picDescription').textContent = jsObject.explanation;

  };
getPic();

