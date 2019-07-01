 const bodyBcg  = document.querySelector('body');
const colorBtn = document.querySelector('.colorBtn');
const imge = ['yellow','red','gold','green'];
colorBtn.addEventListener('click',getclr);
function getclr (){
 
  let random = Math.floor(Math.random()*imge.length)
bodyBcg.style.backgroundColor = imge[random];
}