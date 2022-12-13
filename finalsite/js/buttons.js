

const btn1 = document.querySelector('#star');
const btn2 = document.querySelector('#star2');
const btn3 = document.querySelector('#star3');
const btn4 = document.querySelector('#star4');
const btn5 = document.querySelector('#star5');

setButtonColorAndAddToLocalStorage = (likestatus, elm, elmClass,  status) => {
    const elmStatusSet = elm.classList.contains(elmClass);
    elm.classList.toggle(elmClass);
    localStorage.setItem(likestatus, elmStatusSet ? '' : status);
  };



const likeStatus = localStorage.getItem('like-status');
if (likeStatus) {
  if (likeStatus === 'liked') {
    btn1.classList.add('gold');
  }
  
}

btn1.addEventListener('click', () => {
  setButtonColorAndAddToLocalStorage('like-status',btn1, 'gold',  'liked');
});
const likeStatus2 = localStorage.getItem('like-status2');
if (likeStatus2) {
  if (likeStatus2 === 'liked') {
    btn2.classList.add('gold');
  }
  
}

btn2.addEventListener('click', () => {
  setButtonColorAndAddToLocalStorage('like-status2',btn2, 'gold',  'liked');
});






const likeStatus3 = localStorage.getItem('like-status3');
if (likeStatus3) {
  if (likeStatus3 === 'liked') {
    btn3.classList.add('gold');
  }
  
}

btn3.addEventListener('click', () => {
  setButtonColorAndAddToLocalStorage('like-status3',btn3, 'gold',  'liked');
});


const likeStatus4 = localStorage.getItem('like-status4');
if (likeStatus4) {
  if (likeStatus4 === 'liked') {
    btn4.classList.add('gold');
  }
  
}

btn4.addEventListener('click', () => {
  setButtonColorAndAddToLocalStorage('like-status4',btn4, 'gold',  'liked');
});

const likeStatus5 = localStorage.getItem('like-status5');
if (likeStatus5) {
  if (likeStatus5 === 'liked') {
    btn5.classList.add('gold');
  }
  
}

btn5.addEventListener('click', () => {
  setButtonColorAndAddToLocalStorage('like-status5',btn5, 'gold',  'liked');
});






