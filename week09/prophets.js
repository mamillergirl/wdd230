const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

async function getProphets(requestURL){
    const response = await fetch(requestURL);
    console.log(response)
    if (response.ok){
        const jsObject = await response.json();
        console.log(jsObject);
        const prophets = jsObject['prophets'];
        console.log(prophets);
        prophets.forEach(displayProphets);
    }
    
}



function displayProphets(item){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let dob = document.createElement('p');
    let pob = document.createElement('p')

    img.setAttribute('src', item.imageurl);
    img.setAttribute('alt', item.name + "" + item.lastname);

    h2.textContent = item.name + ' ' + item.lastname;
    dob.textContent = 'Date of Birth: ' + item.birthdate;
    pob.textContent = 'Place of Birth: ' + item.birthplace;
    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(img);

    document.querySelector('.cards').appendChild(card);


}
getProphets(requestURL);