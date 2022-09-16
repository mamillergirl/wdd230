
let currentYear = new Date().getFullYear();

document.querySelector("#year").innerHTML = currentYear;
let lastModified = new Date(document.lastModified);

console.log(lastModified)
document.querySelector('#last_modified').innerHTML = lastModified;