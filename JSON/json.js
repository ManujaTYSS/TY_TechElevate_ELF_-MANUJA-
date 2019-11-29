let employeeJSON = {
    name:'manu',
    age:21,
    hobbies: ['reading','singing'],
}
console.log(`My name is ${employeeJSON.name}`);
console.log(employeeJSON);
let jsonObejct = JSON.stringify(employeeJSON); // to convert json  object to javascript string
console.log(jsonObejct);
let jsObejct = JSON.parse(jsonObejct); // to convet js string to json object
console.log(jsObejct);
