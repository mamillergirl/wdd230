const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-Business.json';

async function getBusinesses(requestURL){
    const response = await fetch(requestURL);
    console.log(response)
    if (response.ok){
        const jsObject = await response.json();
        console.log(jsObject);
        const businesses = jsObject['businesses'];
        console.log(businesses);
        businesses.forEach(displayBusiness);
    }
    
}



function displayBusiness(item){
    let card = document.createElement('section');
    let h4 = document.createElement('h4');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let urlP = document.createElement('p');
    let url = document.createElement('a');
    urlP.appendChild(url);

    logo.setAttribute('src', item.imageurl);
    logo.setAttribute('alt', item.name + "logo");

    h4.textContent = item.name;
    address.textContent = item.address;
    phone.textContent = item.phoneNumberl

    card.appendChild(h4);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(urlP);
    

    document.querySelector('.cards').appendChild(card);


}
getBusinesses(requestURL);