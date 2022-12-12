const requestURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=nqKlFzmiutqKZbRP4ZXsRwSy1GVGX8iEjVgS1vkL';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
async function getRoverPics(requestURL){
    const response = await fetch(requestURL);
    console.log(response)
    if (response.ok){
        const jsObject = await response.json();
        console.log(jsObject);
        const photos = jsObject['photos'];

        console.log(photos);
        
        displayRoverPics(photos[1]);
        displayRoverPics(photos[855]);
        displayRoverPics(photos[312]);
        displayRoverPics(photos[569]);
        displayRoverPics(photos[413]);
        displayRoverPics(photos[34]);
        displayRoverPics(photos[628]);
        displayRoverPics(photos[525]);
        displayRoverPics(photos[316]);
        displayRoverPics(photos[100]);
        displayRoverPics(photos[434]);
        displayRoverPics(photos[633]);
      
        
  
    }
    
}



function displayRoverPics(item){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let ed = document.createElement('p');


    img.setAttribute('src', item.img_src);
    img.setAttribute('alt', item.rover.name + 'image') ;

    h2.innerText = item.rover.name + " Rover "+ item.camera.full_name ;
   
   
    ed.innerText = item.earth_date;
    card.innerHTML = `<h2>${item.rover.name} Rover ${item.camera.full_name}</h2><span>${item.earth_date}</span><img src="${item.img_src}" alt="${item.rover.name + item.camera.full_name} photo"> `
   
    

   
   

    document.querySelector('.roverPics').appendChild(card);


}
getRoverPics(requestURL);