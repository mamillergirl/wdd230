const requestURL = 'https://mamillergirl.github.io/wdd230/chamber/json/data.json';

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

    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let urlP = document.createElement('p');
    
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    
    urlP.innerHTML = `<a href="${item.url}">${item.url}</a>`

    logo.setAttribute('src', item.imageurl);
    logo.setAttribute('alt', item.name + " Logo");

    address.textContent = item.address;
    phone.textContent = item.phone



    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(urlP);


    tr.innerHTML = `<td>${item.name}</td><td>${item.address}</td><td>${item.phone}</td><td><a href=${item.url}>${item.url}</a></td>`
  
    document.querySelector('.cards').appendChild(card);
    document.querySelector('.list').appendChild(tr);
    

}
getBusinesses(requestURL);

function hide(which){
    let cards = document.querySelector('.cardDisplay');
    let list = document.querySelector('.listDisplay');
    let hidden;
    let displayed;
    if (which == 'cards'){
        hidden = cards;
        displayed = list;
    } else if (which == 'list'){
        hidden = list;
        displayed = cards;
    }
    hidden.style.display = 'none';
    displayed.style.display = 'block';
}





