let formelement = document.createElement('form');
console.log(formelement);
// formelement.className='add';
document.body.appendChild(formelement);

let div1 = document.createElement('div');
let label1 = document.createElement('label');
label1.textContent = 'Name:';
console.log(label1);
let input1 = document.createElement('input');

let div2 = document.createElement('div');
let label2 = document.createElement('label');
label2.textContent = 'age:';
console.log(label2);
let input2 = document.createElement('input');

let div3 = document.createElement('div');
let label3 = document.createElement('label');
label3.textContent = 'gender:';
console.log(label3);
let input3 = document.createElement('input');

let div4 = document.createElement('div');
let label4 = document.createElement('label');
label4.textContent = 'address:';
console.log(label4);
let input4 = document.createElement('input');

let div5 = document.createElement('div');
let button = document.createElement('button');
button.textContent = 'submit';
console.log(button);

div1.appendChild(label1);
div1.appendChild(input1);

div2.appendChild(label2);
div2.appendChild(input2);

div3.appendChild(label3);
div3.appendChild(input3);

div4.appendChild(label4);
div4.appendChild(input4);

div5.appendChild(button);

formelement.appendChild(div1);
formelement.appendChild(div2);
formelement.appendChild(div3);
formelement.appendChild(div4);
formelement.appendChild(div5);

