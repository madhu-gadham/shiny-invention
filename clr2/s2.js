const bcg = document.querySelector('body');
const hexBtn = document.querySelector('.hexBtn');
const code = ['0','1', '2' ,'3' ,'4' ,'5', '6', '7' ,'8' ,'9', 'A' ,'B', 'C' ,'D' ,'E' ,' F'];
const hex = document.querySelector('.hex');
hexBtn.addEventListener('click', hexcolorget);
function hexcolorget() {
 let nin ='#';
for(let i=0;i<6;i++){
 let random = Math.floor(Math.random()*code.length);

   nin +=code[random];
}
bcg.style.backgroundColor = nin;
hex.innerHTML = nin;
}
