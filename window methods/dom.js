//getElementById()
let pElement=document.getElementById('demo');
console.log(pElement);
pElement.textContent='This is new p tag';
//getElementsByClassName
let divElements=document.getElementsByClassName('blue');
console.log(divElements);
let pElements=document.getElementsByTagName('p');
console.log(pElements);
let nameElements=document.getElementsByName('helement');
console.log(nameElements);
let demoElement=document.querySelector('#demo');
console.log(demoElement);
let blueClassElements=document.querySelectorAll('.blue');
console.log(blueClassElements);
let buttonElement=document.createElement('button');
buttonElement.textContent='Click Me';
console.log(buttonElement);
document.body.appendChild(buttonElement);
let spanEle=document.getElementById('spanid');
spanEle.style.color='blue';
let buttonElement1=document.getElementById('buttonEle');
buttonElement1.className='add';
buttonElement1.classList='add add1 ';
console.log('===================style============');
let pElementData = document.getElementById('demo1');
pElementData.style.color = 'blue'; //to provide color to text
pElementData.className = 'blue'; // to provide both  text color and background color 
pElementData.classList = 'blue fonts'; //to provide both  text color and background color and size for text