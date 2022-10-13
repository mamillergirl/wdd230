
let scriptures = document.querySelector('.list');
let chapterInput = document.querySelector('#favchap');
let addBtn = document.querySelector('.button');

addBtn.addEventListener('click', () => {
  let chapter = chapterInput.value;
  chapterInput.value = '';
  let chapterItem = document.createElement('li');
  let chapName = document.createElement('span');
  let deleteBtn = document.createElement('button');

  chapterItem.appendChild(chapName);
  chapName.textContent = chapter;
  chapterItem.appendChild(deleteBtn);
  deleteBtn.textContent = '❌';
  scriptures.appendChild(chapterItem)  
  deleteBtn.addEventListener('click', () => {
    scriptures.removeChild(chapterItem);
  })  
  chapterInput.focus()
});
