const ham = document.querySelector('.ham');
const nav = document.querySelector('.navigation')


ham.addEventListener('click', () => {nav.classList.toggle('responsive'); }, false);
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


const current = new Date();

const full_date = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(current);
document.querySelector('#currentDate').innerHTML = full_date;

let year = current.getFullYear();
document.querySelector('#year').innerHTML = year;

let lastModified = new Date(document.lastModified);

document.querySelector('#last_modified').innerHTML = lastModified;