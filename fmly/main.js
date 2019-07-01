const name_a = ['RAMASWAMY','RAMA','MADHU','SUCHITHRA','PRADEEP','SINDHU','PALLAVI','AAROHI']
const bcg = document.querySelector('body');
const name1 = document.querySelector('.sur_name');
const namebtn = document.querySelector('.namebtn');

namebtn.addEventListener('click',getnames);
function getnames (){
let name12 = 'G.';



 let random = Math.floor(Math.random()*name_a.length);


name12 +=name_a[random];


 name1.innerHTML = name12;

}

