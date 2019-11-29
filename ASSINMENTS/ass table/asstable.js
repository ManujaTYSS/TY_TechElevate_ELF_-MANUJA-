

// create table 



let tableEle=document.createElement('table');
console.log(tableEle);
tableEle.classList='add add1';
document.body.appendChild(tableEle);
let tr1=document.createElement('tr');
let tdr1=document.createElement('td');
tdr1.textContent='Name';
console.log(tdr1);
let tdr2=document.createElement('td');
tdr2.textContent='age';
console.log(tdr2);


let tr2=document.createElement('tr');
let tdr11=document.createElement('td');
tdr11.textContent='manu';
console.log(tdr11);
let tdr22=document.createElement('td');
tdr22.textContent='21';
console.log(tdr22);

let tr3=document.createElement('tr');
let tdr111=document.createElement('td');
tdr111.textContent='thanu';
console.log(tdr111);
let tdr222=document.createElement('td');
tdr222.textContent='22';
console.log(tdr222);

tr1.appendChild(tdr1);
tr1.appendChild(tdr2);


tr2.appendChild(tdr11);
tr2.appendChild(tdr22);

tr3.appendChild(tdr111);
tr3.appendChild(tdr222);

tableEle.appendChild(tr1);
tableEle.appendChild(tr2);
tableEle.appendChild(tr3);
