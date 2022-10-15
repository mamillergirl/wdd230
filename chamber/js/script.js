const ham = document.querySelector('.ham');
const nav = document.querySelector('.navigation')


ham.addEventListener('click', () => {nav.classList.toggle('responsive'); }, false);
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


const current = new Date();

const fullDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(current);
document.querySelector('#currentDate').innerHTML = fullDate;

let year = current.getFullYear();
document.querySelector('#year').innerHTML = year;

let lastModified = new Date(document.lastModified);
const banner = document.querySelector('.banner')


if (current.getDay() ==  1 ||current.getDay() ==  2){
   banner.classList.toggle('announcement')
}

document.querySelector('#last_modified').innerHTML = lastModified;

