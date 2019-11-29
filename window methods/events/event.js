function sayHello(){
alert('Hello!!!');
}
let buttonElement = document.getElementById('ClickButton');
buttonElement.onclick = function(){
    alert('Hello world');
}
function createPElement(){
    let pElementData = document.createElement('p');
    pElementData.textContent = 'This is p ';
    document.body.appendChild( pElementData);
}
// function createhiElement(){
//     let hiElemenData = document.createElement('alertHi');
//     hiElemenData.textContent = 'this is manu ';
//     document.body.appendChild( hiElemenData);
// }
 let alertElement = document.getElementById('alertHi');
 alertElement.addEventListener('click',function(){
    alert('Good evening');
}
);
let h1Element = document.createElement('h1');
//this provides full input in single line 
function showText(){
    let inputElement = document.getElementById('showData');
     console.log(inputElement.value);
     let h1Element = document.createElement('h1');
    // h1 lines give all the entered letter witheach word in line adding to multiple
    //line elements and also deleted elements
     h1Element.textContent = inputElement.value;
     document.body.appendChild( h1Element);
}
