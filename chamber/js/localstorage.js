

if (!localStorage.getItem('lastvisit')){
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent = 'This is your first Visit';
} else {
    setStyles();
}

function setStyles(){
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = Date.now();
    let difference = currDate - prevDate;
        let daysDifference = Math.floor(difference/1000/60/60/24);
        console.log(difference);
    document.getElementById('diff').textContent = `${daysDifference} days since your last visit`;
    localStorage.setItem('lastvisit', Date.now());
}