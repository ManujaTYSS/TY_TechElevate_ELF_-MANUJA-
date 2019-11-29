function sum(a,b){
    function addsum(){
        return a+b;
    }
    return addsum;
}
var addFunc = sum(10,20);
var total = addFunc();
console.log('Total ',total);
// , it acts as concatination with one space
console.log('=========================================');
console.log(window);
console.log(this);
console.log(this===window);
var name = 'manu';
console.log(window.name);
console.log(this.name);
var person = {
    name:'Dulquer salman',
    age:30,
    getName: function(){
        console.log( 'getName method' +this);
        console.log(window);
        getDate();
        function getDate(){
            console.log('Get data method', this);
        }
        return this.name;
    }
}
 var heroName = person.getName();
 console.log('Name =' + heroName);
