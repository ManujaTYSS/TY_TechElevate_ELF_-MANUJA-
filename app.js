//var fruits = ['apple','orange','banana','mango'];
//console.log(fruits);
//for(var i = 0;i<=fruits.length;i++)
//{
   // console.log(fruits[i]);
//}
//var todaydate = new Date();
//console.log('Todays Date=' + todaydate);
//var date = new Date(2019,7,24,10,33,30,0);
//console.log('Date =' + date);
//var date = new Date(0);
//console.log('Date=' + date);
//var date = new Date("october 13, 2014 11:13:00");
//console.log('Date=' + date);

var todayDate = new Date();
//to print date
var date = todayDate.getDate();
console.log('date =' + date);
//to print month in number
var month = todayDate.getMonth();
console.log('month ='+ month);
//to print day in number
var day = todayDate.getDay();
console.log('day=' + day);

    var months=['jan','feb','march','april','may','june','july','august','september','october','november','december'];
     var days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
 //to print month in form of words
     console.log('months=' + months[todayDate.getMonth()]);
     //to print days in words
console.log('days=' + days[todayDate.getDay()]);
   // console.log(Math.ceil(4.5));
    //console.log(Math.random());
    //console.log(Math.floor(4.5));
    //console.log(Math.round(4.5));
    //console.log(Math.random()*10+ Math.random());
    //console.log(Math.round(10*Math.random()));
    //for( var i=1;i<=100;i++)
    //{
 //console.log(Math.random()+i);
   // }
  // var name='rahul';
   //console.log(name);
   //var name1= name;
   //console.log(name1);
   //var name1='gandhi';
   //console.log(name);
   //console.log(name1);
   //var person = {
     //  name:'manu'
   //};
   //console.log(person.name);
   //person1 = person;
   //console.log(person1.name);
   //person1.name='rakshi';
   //console.log(person1.name);