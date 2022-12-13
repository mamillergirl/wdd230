const apiURL = "https://go-apod.herokuapp.com/apod";

const getPic = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
   

    document.getElementById('left').innerHTML = `
    <img  id="astronomyImg" src="${jsObject.url}" alt="${jsObject.title}"></img> `;
    document.getElementById('right').innerHTML = `<h4 id="dailyTitle">${jsObject.title}</h4>
    <p><span id="date">${jsObject.date}</span></p> <p id="picDescription">${jsObject.explanation}</p>`
  };
getPic();
           
